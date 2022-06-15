// @flow
/* eslint-disable */
import * as React from 'react';

// Hooks
import { useDispatch, useSelector } from 'react-redux';;

// Components
import { Box, Modal } from '@mui/material';
import PaymentOutcomeModal from './PaymentOutcomeModal';

// Actions
import { setIsPaymentOutcomeModalOpen } from '../../../../redux/actions';

// Constants
import { TOTAL_COST_LABEL } from '../../../labels';

// Utils
import { getIsPaymentOutcomeModalOpen } from '../../../../redux/selectors';

// Custom hooks
import StripeContainer from './StripeContainer';

type Props = {
  appointmentId: number,
};

const PaymentModal = ({ appointmentId }: Props): React.Node => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [isPaymentSuccessful, setIsPaymentSuccessful] = React.useState(true);
  const isPaymentOutcomeModalOpen = useSelector(getIsPaymentOutcomeModalOpen);

  // Stripe accepts the price in cents, price * 100;

  const totalAmount = 600;
  const currency = 'MKD';
  const totalLabel = `${TOTAL_COST_LABEL} ${totalAmount} ${currency}.`;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '400px',
    minHeight: '350px',
    backgroundColor: '#e3dfdc',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '25px',
  };

  const handlePaying = () => {
    // TODO: implement this
    // structure the data for BE

    console.log('Is payment successful', isPaymentSuccessful);
    dispatch(setIsPaymentOutcomeModalOpen(true));
  };

  return !isPaymentOutcomeModalOpen ? (
    <Modal open>
      <Box sx={style}>
        <StripeContainer appointmentId={appointmentId}/>
      </Box>
    </Modal>
  ) : (
    <PaymentOutcomeModal isPaymentSuccessful={isPaymentSuccessful} />
  );
};

export default PaymentModal;
