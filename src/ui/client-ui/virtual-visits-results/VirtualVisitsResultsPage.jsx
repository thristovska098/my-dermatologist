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
import { APPOINTMENT_STATUSES, CREATE_VIRTUAL_VISIT_BUTTON_LABEL } from '../home-page/constants';
import {
  ADDRESS_LABEL,
  DOCTOR_NAME_LABEL,
  EMAIL_LABEL,
  MEDICAL_DIAGNOSIS_LABEL,
  PHONE_LABEL,
  PRESCRIPTION_LABEL,
  TREATMENT_LABEL,
} from './constants';
import { PAGES_FULL_ROUTES } from '../../../routing/pages';

const VirtualVisitsResultsPage = (): React.Node => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push(PAGES_FULL_ROUTES.PATIENT_CREATE_VIRTUAL_VISIT_FORM);
  };

  // TODO: replace the dummy data with real data when the BE is implemented.
  const renderedAccordions = listOfAppointments
    .sort((appointment1, appointment2) => appointment1?.appointmentStatus === appointment2?.appointmentStatus)
    .map((appointment: Object): Array<React.Node> => {
      const statusColor = appointment?.appointmentStatus === APPOINTMENT_STATUSES.COMPLETED ? 'green' : 'auto';
      const address = appointment?.doctor?.officeInformation?.address;
      const addressInfo = `${address?.street} ${address?.streetNumber}, ${address?.zipCode} ${address.city}`;

      return (
        <Accordion key={appointment?.appointmentId}>
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
              <Label>{DOCTOR_NAME_LABEL}</Label>
              {`${appointment?.doctor?.name} ${appointment?.doctor?.lastName}`}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{EMAIL_LABEL}</Label>
              {appointment?.doctor?.officeInformation?.email}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{PHONE_LABEL}</Label>
              {appointment?.doctor?.officeInformation?.phone}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{ADDRESS_LABEL}</Label>
              {addressInfo}
            </LabelAndInfoWrapper>
            <br />
            <LabelAndInfoWrapper>
              <Label>{MEDICAL_DIAGNOSIS_LABEL}</Label>
              {appointment?.medicalDiagnosis}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{PRESCRIPTION_LABEL}</Label>
              {appointment?.medicinePrescription}
            </LabelAndInfoWrapper>
            <LabelAndInfoWrapper>
              <Label>{TREATMENT_LABEL}</Label>
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
            {CREATE_VIRTUAL_VISIT_BUTTON_LABEL}
          </Button>
        </ButtonWrapper>
      </AccordionAndButtonContainer>
    </AccordionsContainer>
  );
};

export default VirtualVisitsResultsPage;
