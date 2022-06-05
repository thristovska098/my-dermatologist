// @flow

import * as React from 'react';

// Utils
import { v4 as uuid } from 'uuid';

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
  Label,
  LabelAndInfoWrapper,
} from '../../client-ui/virtual-visits-results/styles';
import { ImageContainer, ImageContainerForModal } from './styles';
import { RowsContainer } from '../../common/styles';

// Constants
import { listOfAppointments } from './dummyData';
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
} from '../../labels';

// Actions
import { setResponseModalOpenedForAppointmentId } from '../../../redux/actions';

const ReviewVirtualVisitsPage = (): React.Node => {
  const [openedModal, setOpenedModal] = React.useState(null);
  const [openedAccordionId, setOpenedAccordionId] = React.useState(null);
  const dispatch = useDispatch();

  const handleShowPopover = (image: string) => {
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
    <ImageList sx={{ width: '100%', height: 300 }} cols={5} gap={20} rowHeight={164}>
      {appointment?.images?.map((image) => (
        <ImageListItem key={appointment.appointmentId + uuid()}>
          <ImageContainer src={image} loading="lazy" onClick={() => handleShowPopover(image)} />
        </ImageListItem>
      ))}
    </ImageList>
  );

  // TODO: replace the dummy data with real data when the BE is implemented.
  const renderedAccordions = listOfAppointments
    .sort((appointment1: Object, appointment2: Object): number => {
      if (appointment1?.appointmentStatus === appointment2?.appointmentStatus) return 0;
      if (appointment1?.appointmentStatus === APPOINTMENT_STATUSES.WAITING_FOR_REVIEW) return -1;
      return 1;
    })
    .map((appointment: Object): React.Node => {
      const statusColor = appointment?.appointmentStatus === APPOINTMENT_STATUSES.COMPLETED ? 'green' : 'auto';
      const isExpanded = openedAccordionId === appointment?.appointmentId;

      return (
        <Accordion
          key={appointment?.appointmentId}
          onClick={() => setOpenedAccordionId(appointment?.appointmentId)}
          expanded={isExpanded}
        >
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
            <AccordionSummaryContainer>
              {appointment?.title}
              <DateAndStatusContainer>
                <AppointmentStatusWrapper color={statusColor}>
                  {appointment?.appointmentStatus}
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
              {appointment?.patient?.gender}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{DATE_OF_BIRTH_LABEL}:</Label>
              {appointment?.patient?.dateOfBirth}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{EMAIL_LABEL}:</Label>
              {appointment?.patient?.contactInformation?.email}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{PHONE_LABEL}:</Label>
              {appointment?.patient?.contactInformation?.phone}
            </LabelAndInfoWrapper>
            <br />
            <LabelAndInfoWrapper>
              <Label>{DESCRIPTION_OF_ISSUE_LABEL}:</Label>
              {appointment?.description}
            </LabelAndInfoWrapper>
            <br />
            {renderedImages(appointment)}
            {appointment?.appointmentStatus === APPOINTMENT_STATUSES.WAITING_FOR_REVIEW && (
              <Button onClick={() => dispatch(setResponseModalOpenedForAppointmentId(appointment?.appointmentId))}>
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
