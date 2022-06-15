// @flow

import * as React from 'react';

// Hooks
import { useDispatch } from 'react-redux';

// Components
import {
  Box,
  ImageList,
  Modal,
  ImageListItem,
  AccordionDetails,
  Accordion,
  Button,
  AccordionSummary,
} from '@mui/material';
import { ExpandMore } from '@material-ui/icons';
import {
  AccordionAndButtonContainer,
  AccordionsContainer,
  AccordionSummaryContainer,
  AppointmentStatusWrapper,
  DateAndStatusContainer,
  InfoWrapper,
  Label,
  LabelAndInfoWrapper,
} from '../../client-ui/virtual-visits-results/styles';
import { ImageContainer, ImageContainerForModal } from './styles';
import { RowsContainer, NoAppointmentsContainer } from '../../common/styles';

// Constants
import {
  APPOINTMENT_STATUSES,
  DATE_OF_BIRTH_LABEL,
  GENDER_LABEL,
  PATIENT_NAME_LABEL,
  SSN_LABEL,
  PHONE_LABEL,
  EMAIL_LABEL,
  RESPOND_LABEL,
  DESCRIPTION_OF_ISSUE_LABEL,
  NO_APPOINTMENTS_MESSAGE,
} from '../../labels';
import { APPOINTMENT_STATUS } from './constants';

// Actions
import { setResponseModalOpenedForAppointmentId } from '../../../redux/actions';

// Custom hooks
import { useFetchAppointments } from '../../../hooks/useFetchAppointments';

const ReviewVirtualVisitsPage = (): React.Node => {
  const [openedModal, setOpenedModal] = React.useState(null);
  const [openedAccordionId, setOpenedAccordionId] = React.useState(null);
  const [appointments, setAppointments] = React.useState(undefined);

  const dispatch = useDispatch();
  const fetchAppointments = useFetchAppointments();

  React.useEffect(() => {
    fetchAppointments.then((response: Object) => {
      setAppointments(response?.data);
    });
    // eslint-disable-next-line
  }, []);

  const handleShowPopover = (image: string, event: Object) => {
    event.stopPropagation();
    setOpenedModal(image);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    boxShadow: 24,
    p: 4,
    display: 'flex',
  };

  const renderedImages = (appointment: Object): React.Node => (
    <ImageList sx={{ width: '100%' }} cols={5} gap={20} rowHeight="auto">
      {appointment?.images?.map((image: Object): React.Node => {
        const preparedSource = `data:${image?.type};base64,${image?.data}`;
        return (
          <ImageListItem key={image?.id}>
            <ImageContainer
              src={preparedSource}
              loading="lazy"
              onClick={(event) => handleShowPopover(preparedSource, event)}
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );

  const renderedAccordions = appointments
    ?.sort((appointment1: Object, appointment2: Object): number => {
      if (appointment1?.appointmentStatus === appointment2?.appointmentStatus) return 0;
      if (appointment1?.appointmentStatus === APPOINTMENT_STATUS.WAITING) return -1;
      return 1;
    })
    .map((appointment: Object): React.Node => {
      const statusColor = appointment?.appointmentStatus === APPOINTMENT_STATUS.COMPLETED ? 'green' : 'auto';
      const isExpanded = openedAccordionId === appointment?.id;

      return (
        <Accordion
          key={appointment?.id}
          onClick={() => setOpenedAccordionId(isExpanded ? undefined : appointment?.id)}
          expanded={isExpanded}
        >
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
            <AccordionSummaryContainer>
              {appointment?.title}
              <DateAndStatusContainer>
                <AppointmentStatusWrapper color={statusColor}>
                  {APPOINTMENT_STATUSES[appointment?.appointmentStatus]}
                </AppointmentStatusWrapper>
                <div>{appointment?.createdOnDate}</div>
              </DateAndStatusContainer>
            </AccordionSummaryContainer>
          </AccordionSummary>
          <AccordionDetails>
            <LabelAndInfoWrapper>
              <Label>{PATIENT_NAME_LABEL}:</Label>
              {`${appointment?.patient?.name} ${appointment?.patient?.lastName}`}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{SSN_LABEL}:</Label>
              {appointment?.patient?.ssn}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{GENDER_LABEL}:</Label>
              {appointment?.patient?.gender?.toLowerCase()}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{DATE_OF_BIRTH_LABEL}:</Label>
              {appointment?.patient?.dateOfBirth?.substring(0, 10)}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{EMAIL_LABEL}:</Label>
              {appointment?.patient?.email}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{PHONE_LABEL}:</Label>
              {appointment?.patient?.phone}
            </LabelAndInfoWrapper>
            <br />
            <LabelAndInfoWrapper>
              <Label>{DESCRIPTION_OF_ISSUE_LABEL}:</Label>
              <InfoWrapper>{appointment?.description}</InfoWrapper>
            </LabelAndInfoWrapper>
            <br />
            {renderedImages(appointment)}
            {appointment?.appointmentStatus === APPOINTMENT_STATUS.WAITING && (
              <Button
                onClick={(event: Object) => {
                  event.stopPropagation();
                  dispatch(setResponseModalOpenedForAppointmentId(appointment?.id));
                }}
              >
                {RESPOND_LABEL}
              </Button>
            )}
          </AccordionDetails>
        </Accordion>
      );
    });

  return (
    <AccordionsContainer>
      <AccordionAndButtonContainer>
        <RowsContainer>{renderedAccordions}</RowsContainer>
        {appointments?.length === 0 && <NoAppointmentsContainer>{NO_APPOINTMENTS_MESSAGE}</NoAppointmentsContainer>}
      </AccordionAndButtonContainer>
      {/* eslint-disable-next-line no-unused-vars */}
      <Modal open={openedModal !== null} onClose={(event, reason = 'backdropClick') => setOpenedModal(null)}>
        <Box sx={style}>
          <ImageContainerForModal src={openedModal} />
        </Box>
      </Modal>
    </AccordionsContainer>
  );
};

export default ReviewVirtualVisitsPage;
