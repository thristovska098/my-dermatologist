// @flow
import * as React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

type Props = {
  appointmentId?: number,
};

const STRIPE_PUBLIC_KEY =
  'pk_test_51Kx6CwK3oLDScpUFougFfHpeMqM3b4OJsdtS3Mfmkrykq35IZC1sM6VyrhUWJ2tzLzeGx7eSNWX8lFLNYU7GNnxr00NGXJDrCl';

const StripeContainer = ({ appointmentId }: Props): React.Node => {
  const handleStripeLoading = loadStripe(STRIPE_PUBLIC_KEY);

  return (
    <Elements stripe={handleStripeLoading}>
      <PaymentForm appointmentId={appointmentId} />
    </Elements>
  );
};

export default StripeContainer;
