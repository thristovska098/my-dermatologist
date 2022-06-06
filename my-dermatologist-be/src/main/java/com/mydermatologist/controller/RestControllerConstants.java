package com.mydermatologist.controller;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

/**
 * Rest Controller Constants.
 */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class RestControllerConstants {

  /**
   * API Rest Endpoint.
   */
  public static final String API_REST_ENDPOINT = "/my-dermatologist";

  /**
   * Patient Endpoint.
   */
  public static final String PATIENT_ENDPOINT = API_REST_ENDPOINT + "/patient";

  /**
   * Patient Credit card Endpoint.
   */
  public static final String PATIENT_CREDIT_CARD_ENDPOINT = PATIENT_ENDPOINT + "/credit-card";

  /**
   * Appointments for patient Endpoint.
   */
  public static final String PATIENT_APPOINTMENTS_ENDPOINT = PATIENT_ENDPOINT + "/appointments";
}
