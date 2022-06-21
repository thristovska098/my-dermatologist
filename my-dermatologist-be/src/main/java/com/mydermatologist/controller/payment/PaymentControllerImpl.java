package com.mydermatologist.controller.payment;

import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import static com.mydermatologist.controller.RestControllerConstants.CREATE_PAYMENT_INTENT_ENDPOINT;

/**
 * Payments REST controller implementation.
 */
@RestController
public class PaymentControllerImpl implements PaymentController {

  /**
   * Create payment intent and return the client secret.
   *
   * @return the {@link String}.
   */
  @ResponseBody
  @RequestMapping(value = CREATE_PAYMENT_INTENT_ENDPOINT, method = RequestMethod.GET)
  public String createPaymentIntent(@RequestParam Long amount) throws StripeException {

    PaymentIntentCreateParams createParams = PaymentIntentCreateParams.builder().setCurrency("mkd").putMetadata("dermatologistService", "regularAppointment").setAmount(amount * 100L).build();

    PaymentIntent intent = PaymentIntent.create(createParams);

    return intent.getClientSecret();
  }
}
