// @flow
import * as React from 'react';

// Hooks
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import { Button } from '@mui/material';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { PaymentOutcomeContainer, PaymentOutcomeTextContainer, StyledIconWrapper } from './styles';

// Actions
import { setIsPaymentModalOpen } from '../../../../redux/actions';

// Constants
import { CONTINUE_FIELD_LABEL, UNSUCCESSFUL_PAYMENT_LABEL, SUCCESSFUL_PAYMENT_LABEL } from '../../../labels';
import { PAGES_FULL_ROUTES } from '../../../../routing/pages';

// Custom hooks
import { useDeleteAppointment } from '../../../../hooks/useDeleteAppointment';

type Props = {
  isPaymentSuccessful: boolean,
  appointmentId?: number,
};

const PaymentOutcomeModal = ({ isPaymentSuccessful, appointmentId }: Props): React.Node => {
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteAppointment = useDeleteAppointment();

  const handleButtonClick = () => {
    if (isPaymentSuccessful) {
      dispatch(setIsPaymentModalOpen(false));
      history.push(PAGES_FULL_ROUTES.PATIENT_HOME_PAGE);
    } else {
      deleteAppointment(appointmentId);
      dispatch(setIsPaymentModalOpen(false));
    }
  };

  const button = <Button onClick={handleButtonClick}>{CONTINUE_FIELD_LABEL}</Button>;

  const icon = (
    <StyledIconWrapper>
      {isPaymentSuccessful ? <DoneTwoToneIcon color="success" /> : <ErrorOutlineIcon />}
    </StyledIconWrapper>
  );

  const label = (
    <PaymentOutcomeTextContainer>
      {isPaymentSuccessful ? SUCCESSFUL_PAYMENT_LABEL : UNSUCCESSFUL_PAYMENT_LABEL}
    </PaymentOutcomeTextContainer>
  );

  return (
    <PaymentOutcomeContainer>
      {icon}
      {label}
      {button}
    </PaymentOutcomeContainer>
  );
};

export default PaymentOutcomeModal;
