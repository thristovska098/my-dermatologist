package com.mydermatologist.controller;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

/**
 * Rest Controller Constants.
 */
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class RestControllerConstants {

  /** API Rest Endpoint. */
  public static final String API_REST_ENDPOINT = "/my-dermatologist";

  /** Patient Endpoint. */
  public static final String PATIENT_ENDPOINT = API_REST_ENDPOINT+ "/patient";

  /** Appointments for patient Endpoint. */
  public static final String PATIENT_APPOINTMENTS_ENDPOINT = PATIENT_ENDPOINT+ "/appointments";
}
