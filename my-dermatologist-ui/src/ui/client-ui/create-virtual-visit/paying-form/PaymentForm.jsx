// @flow
import * as React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Form } from 'react-final-form';
import { Button, CircularProgress } from '@mui/material';
import { ButtonContainer, PageContentContainer, TotalPaymentContainer } from './styles';
import PaymentOutcomeModal from './PaymentOutcomeModal';
import { CANCEL_FIELD_LABEL, MAKE_PAYMENT_LABEL, TOTAL_COST_LABEL } from '../../../labels';
import { PAGES_FULL_ROUTES } from '../../../../routing/pages';
import { BASE_URL, FETCH_CLIENT_SECRET_STRIPE } from '../../../../hooks/endpoints';
import { useDeleteAppointment } from '../../../../hooks/useDeleteAppointment';
import { setIsPaymentModalOpen } from '../../../../redux/actions';

const style = {
  base: {
    iconColor: '#0b0b10',
    color: '#0b0b10',
    fontWeight: 300,
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSize: '18px',
  },
};

type Props = {
  appointmentId?: number,
};

const PaymentForm = ({ appointmentId }: Props): React.Node => {
  const dispatch = useDispatch();
  const [success, setSuccess] = React.useState(undefined);
  const [showLoader, setShowLoader] = React.useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const totalAmount = 600;
  const currency = 'MKD';
  const totalLabel = `${TOTAL_COST_LABEL} ${totalAmount} ${currency}.`;
  const card = <CardElement options={{ hidePostalCode: true, style }} />;
  const history = useHistory();
  const deleteAppointment = useDeleteAppointment();

  const handleCancel = () => {
    if (appointmentId !== undefined) {
      deleteAppointment(appointmentId);
    }

    dispatch(setIsPaymentModalOpen(false));
    history.push(PAGES_FULL_ROUTES.PATIENT_HOME_PAGE);
  };

  React.useEffect((): Function => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handlingSubmit = async () => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      setShowLoader(true);
      setSuccess(false);
      axios
        .get(`${BASE_URL}${FETCH_CLIENT_SECRET_STRIPE}`, {
          params: {
            amount: 600,
          },
        })
        .then((response: Object) => {
          stripe
            .confirmCardPayment(response?.data, {
              payment_method: paymentMethod?.id,
            })
            .then((result: Object) => {
              setShowLoader(false);
              setSuccess(result?.paymentIntent?.status === 'succeeded');
            });
        });
    } else {
      setSuccess(false);
    }
  };

  return !showLoader ? (
    <Form
      onSubmit={handlingSubmit}
      subscription={{ values: true, form: true }}
      render={({ handleSubmit }) => (
        <PageContentContainer>
          {success === undefined ? (
            <>
              <TotalPaymentContainer>{totalLabel}</TotalPaymentContainer>
              {card}
              <ButtonContainer>
                <Button variant="contained" onClick={handleSubmit}>
                  {MAKE_PAYMENT_LABEL}
                </Button>
                <Button onClick={handleCancel}>{CANCEL_FIELD_LABEL}</Button>
              </ButtonContainer>
            </>
          ) : (
            <PaymentOutcomeModal isPaymentSuccessful={success} appointmentId={appointmentId} setSuccess={setSuccess} />
          )}
        </PageContentContainer>
      )}
    />
  ) : (
    <CircularProgress size={80} />
  );
};

export default PaymentForm;
