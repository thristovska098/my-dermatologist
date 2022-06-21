package com.mydermatologist.controller.payment;

import com.stripe.exception.StripeException;

/**
 * Payments REST controller interface.
 */
public interface PaymentController {

  /**
   * Create payment intent and return the client secret.
   *
   * @return the {@link String}.
   */
  String createPaymentIntent(Long amount) throws StripeException;
}
