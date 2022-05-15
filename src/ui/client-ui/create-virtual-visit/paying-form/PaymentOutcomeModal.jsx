// @flow
import * as React from 'react';

// Hooks
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import { Box, Button, Modal } from '@mui/material';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { PaymentOutcomeContainer, PaymentOutcomeTextContainer, StyledIconWrapper } from './styles';

// Actions
import { setIsPaymentModalOpen, setIsPaymentOutcomeModalOpen } from '../../../../redux/actions';

// Constants
import {
  CONTINUE_BUTTON_LABEL,
  SUCCESSFUL_PAYMENT_LABEL,
  TRY_AGAIN_BUTTON_LABEL,
  UNSUCCESSFUL_PAYMENT_LABEL,
} from './constants';
import { PAGES_FULL_ROUTES } from '../../../../routing/pages';

type Props = {
  isPaymentSuccessful: boolean,
};

const PaymentOutcomeModal = ({ isPaymentSuccessful }: Props): React.Node => {
  const dispatch = useDispatch();
  const history = useHistory();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    backgroundColor: '#e3dfdc',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    borderRadius: '25px',
  };

  const handleButtonClick = () => {
    if (isPaymentSuccessful) {
      dispatch(setIsPaymentOutcomeModalOpen(false));
      dispatch(setIsPaymentModalOpen(false));
      history.push(PAGES_FULL_ROUTES.PATIENT_HOME_PAGE);
    } else {
      dispatch(setIsPaymentOutcomeModalOpen(false));
    }
  };

  const button = (
    <Button onClick={handleButtonClick}>{isPaymentSuccessful ? CONTINUE_BUTTON_LABEL : TRY_AGAIN_BUTTON_LABEL}</Button>
  );

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
    <Modal open>
      <Box sx={style}>
        <PaymentOutcomeContainer>
          {icon}
          {label}
          {button}
        </PaymentOutcomeContainer>
      </Box>
    </Modal>
  );
};

export default PaymentOutcomeModal;
