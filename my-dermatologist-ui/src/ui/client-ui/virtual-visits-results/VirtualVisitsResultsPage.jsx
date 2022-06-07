// @flow
import * as React from 'react';

// Hooks
import { useHistory } from 'react-router-dom';

// Components
import { Accordion, AccordionSummary, Button, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@material-ui/icons';
import { RowsContainer } from '../../common/styles';
import {
  AccordionAndButtonContainer,
  AccordionsContainer,
  AccordionSummaryContainer,
  AppointmentStatusWrapper,
  ButtonWrapper,
  DateAndStatusContainer,
  LabelAndInfoWrapper,
  Label,
} from './styles';

// Constants
import { listOfAppointments } from '../home-page/dummyData';
import {
  APPOINTMENT_STATUSES,
  CREATE_VIRTUAL_VISIT_LABEL,
  ADDRESS_LABEL,
  EMAIL_LABEL,
  PHONE_LABEL,
  MEDICAL_DIAGNOSIS_LABEL,
  TREATMENT_LABEL,
  DOCTOR_NAME_LABEL,
  PRESCRIPTION_LABEL,
} from '../../labels';
import { PAGES_FULL_ROUTES } from '../../../routing/pages';

const VirtualVisitsResultsPage = (): React.Node => {
  const history = useHistory();
  const [accountIdOpened, setAccountAccordionOpened] = React.useState(undefined);

  const handleButtonClick = () => {
    history.push(PAGES_FULL_ROUTES.PATIENT_CREATE_VIRTUAL_VISIT_FORM);
  };

  // TODO: replace the dummy data with real data when the BE is implemented.
  const renderedAccordions = listOfAppointments
    .sort((appointment1: Object, appointment2: Object): number => {
      if (appointment1?.appointmentStatus === appointment2?.appointmentStatus) return 0;
      if (appointment1?.appointmentStatus === APPOINTMENT_STATUSES.WAITING_FOR_REVIEW) return 1;
      return -1;
    })
    .map((appointment: Object): React.Node => {
      const statusColor = appointment?.appointmentStatus === APPOINTMENT_STATUSES.COMPLETED ? 'green' : 'auto';
      const address = appointment?.doctor?.officeInformation?.address;
      const addressInfo = `${address?.street} ${address?.streetNumber}, ${address?.zipCode} ${address.city}`;
      const isExpanded = appointment?.appointmentId === accountIdOpened;
      return (
        <Accordion
          key={appointment?.appointmentId}
          expanded={isExpanded}
          onClick={() => setAccountAccordionOpened(isExpanded ? undefined : appointment?.appointmentId)}
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
              <Label>{DOCTOR_NAME_LABEL}:</Label>
              {`${appointment?.doctor?.name} ${appointment?.doctor?.lastName}`}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{EMAIL_LABEL}:</Label>
              {appointment?.doctor?.officeInformation?.email}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{PHONE_LABEL}:</Label>
              {appointment?.doctor?.officeInformation?.phone}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{ADDRESS_LABEL}:</Label>
              {addressInfo}
            </LabelAndInfoWrapper>
            <br />
            <LabelAndInfoWrapper>
              <Label>{MEDICAL_DIAGNOSIS_LABEL}:</Label>
              {appointment?.medicalDiagnosis}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{PRESCRIPTION_LABEL}:</Label>
              {appointment?.medicinePrescription}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{TREATMENT_LABEL}:</Label>
              {appointment?.treatment}
            </LabelAndInfoWrapper>
          </AccordionDetails>
        </Accordion>
      );
    });

  return (
    <AccordionsContainer>
      <AccordionAndButtonContainer>
        <RowsContainer>{renderedAccordions}</RowsContainer>
        <ButtonWrapper>
          <Button variant="contained" onClick={handleButtonClick}>
            {CREATE_VIRTUAL_VISIT_LABEL}
          </Button>
        </ButtonWrapper>
      </AccordionAndButtonContainer>
    </AccordionsContainer>
  );
};

export default VirtualVisitsResultsPage;
