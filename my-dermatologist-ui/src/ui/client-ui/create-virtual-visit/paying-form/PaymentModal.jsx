// @flow
import * as React from 'react';

// Hooks
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Form } from 'react-final-form';
import { Box, Button, Modal } from '@mui/material';
import { FieldsContainer, ButtonContainer, TotalPaymentContainer, PageContentContainer } from './styles';
import PaymentOutcomeModal from './PaymentOutcomeModal';

// Actions
import { setIsPaymentOutcomeModalOpen } from '../../../../redux/actions';

// Constants
import { MAKE_PAYMENT_LABEL, TOTAL_COST_LABEL } from '../../../labels';

// Utils
import { getIsPaymentOutcomeModalOpen } from '../../../../redux/selectors';

const PaymentModal = (): React.Node => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [isPaymentSuccessful, setIsPaymentSuccessful] = React.useState(false);
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
    width: 200,
    backgroundColor: '#e3dfdc',
    boxShadow: 24,
    p: 4,
    display: 'flex',
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
        <Form
          onSubmit={handlePaying}
          subscription={{ values: true, form: true }}
          render={({ handleSubmit }) => (
            <PageContentContainer>
              <FieldsContainer>
                <TotalPaymentContainer>{totalLabel}</TotalPaymentContainer>
                <ButtonContainer>
                  <Button variant="contained" onClick={handleSubmit}>
                    {MAKE_PAYMENT_LABEL}
                  </Button>
                </ButtonContainer>
              </FieldsContainer>
            </PageContentContainer>
          )}
        />
      </Box>
    </Modal>
  ) : (
    <PaymentOutcomeModal isPaymentSuccessful={isPaymentSuccessful} />
  );
};

export default PaymentModal;
