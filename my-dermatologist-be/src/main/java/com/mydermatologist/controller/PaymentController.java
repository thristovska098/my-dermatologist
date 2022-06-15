package com.mydermatologist.controller;

import com.mydermatologist.dto.AppointmentDtoForDoctorReview;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.mydermatologist.controller.RestControllerConstants.DOCTOR_APPOINTMENTS_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.PUBLIC_STRIPE_KEY_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.SECRET_STRIPE_KEY_ENDPOINT;

/**
 * Payments REST controller.
 */
@RestController
public class PaymentController {

  @Value("${stripe.api.key}")
  private String stripeSecretKey;

  @Value("${stripe.public.key}")
  private String stripePublicKey;

  /**
   * Returns secret stripe key.
   *
   * @return the {@link String}.
   */
  @ResponseBody
  @RequestMapping(
    value = SECRET_STRIPE_KEY_ENDPOINT,
    method = RequestMethod.GET)
  public String getSecretStripeKey() {

    return stripeSecretKey;
  }

  /**
   * Returns public stripe key.
   *
   * @return the {@link String}.
   */
  @ResponseBody
  @RequestMapping(
    value = PUBLIC_STRIPE_KEY_ENDPOINT,
    method = RequestMethod.GET)
  public String getPublicStripeKey() {

    return stripePublicKey;
  }



}
