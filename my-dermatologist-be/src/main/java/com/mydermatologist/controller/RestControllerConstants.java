package com.mydermatologist.controller;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

/**
 * Rest Controller Constants.
 */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class RestControllerConstants {

  /**
   * API Rest endpoint.
   */
  public static final String API_REST_ENDPOINT = "/my-dermatologist";

  /**
   * Patient endpoint.
   */
  public static final String PATIENT_ENDPOINT = API_REST_ENDPOINT + "/patient";

  /**
   * Appointment endpoint.
   */
  public static final String APPOINTMENT_ENDPOINT = API_REST_ENDPOINT + "/appointment";

  /**
   * Patient Credit card endpoint.
   */
  public static final String PATIENT_CREDIT_CARD_ENDPOINT = PATIENT_ENDPOINT + "/credit-card";

  /**
   * Create appointment endpoint.
   */
  public static final String CREATE_APPOINTMENT_ENDPOINT = APPOINTMENT_ENDPOINT + "/create";

  /**
   * Appointments for patient endpoint.
   */
  public static final String PATIENT_APPOINTMENTS_ENDPOINT = PATIENT_ENDPOINT + "/appointments";
}
