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
   * Doctor endpoint.
   */
  public static final String DOCTOR_ENDPOINT = API_REST_ENDPOINT + "/doctor";

  /**
   * Appointment endpoint.
   */
  public static final String APPOINTMENT_ENDPOINT = API_REST_ENDPOINT + "/appointment";

  /**
   * Patient Credit card endpoint.
   */
  public static final String PATIENT_CREDIT_CARD_ENDPOINT = PATIENT_ENDPOINT + "/credit-card";

  /**
   * Doctor Credit card endpoint.
   */
  public static final String DOCTOR_CREDIT_CARD_ENDPOINT = DOCTOR_ENDPOINT + "/credit-card";

  /**
   * Create appointment endpoint.
   */
  public static final String CREATE_APPOINTMENT_ENDPOINT = APPOINTMENT_ENDPOINT + "/create";

  /**
   * Appointments for patient endpoint.
   */
  public static final String PATIENT_APPOINTMENTS_ENDPOINT = PATIENT_ENDPOINT + "/appointments";

  /**
   * Appointments for doctor endpoint.
   */
  public static final String DOCTOR_APPOINTMENTS_ENDPOINT = DOCTOR_ENDPOINT + "/appointments";

  /**
   * Office information for doctor endpoint.
   */
  public static final String DOCTOR_OFFICE_INFORMATION_ENDPOINT = DOCTOR_ENDPOINT + "/office-information";

  /**
   * Create medical report .
   */
  public static final String CREATE_MEDICAL_REPORT_ENDPOINT = DOCTOR_ENDPOINT + "/medical-report";

  /**
   * Fetch doctors.
   */
  public static final String FETCH_DOCTORS_ENDPOINT = API_REST_ENDPOINT + "/doctors";

  /**
   * Fetch cities.
   */
  public static final String FETCH_CITIES_ENDPOINT = API_REST_ENDPOINT + "/cities";

  /**
   * Save images endpoint.
   */
  public static final String SAVE_IMAGES_FOR_APPOINTMENT_ENDPOINT = CREATE_APPOINTMENT_ENDPOINT + "/images";

  /**
   * Fetch images endpoint.
   */
  public static final String FETCH_IMAGES_FOR_APPOINTMENT_ENDPOINT = APPOINTMENT_ENDPOINT + "/images";

}
