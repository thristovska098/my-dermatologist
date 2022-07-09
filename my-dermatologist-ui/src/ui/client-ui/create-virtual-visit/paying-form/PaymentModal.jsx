// @flow
import * as React from 'react';
import { Box, Modal } from '@mui/material';
import StripeContainer from './StripeContainer';

type Props = {
  appointmentId?: number,
};

const PaymentModal = ({ appointmentId }: Props): React.Node => {
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

  return (
    <Modal open>
      <Box sx={style}>
        <StripeContainer appointmentId={appointmentId} />
      </Box>
    </Modal>
  );
};

export default PaymentModal;
