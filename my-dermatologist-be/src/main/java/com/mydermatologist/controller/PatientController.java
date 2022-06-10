package com.mydermatologist.controller;

import com.mydermatologist.domain.CreditCard;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.AppointmentDtoForClientReview;
import com.mydermatologist.dto.CreateAppointmentDto;
import com.mydermatologist.dto.PatientRegisterDto;
import com.mydermatologist.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import static com.mydermatologist.controller.RestControllerConstants.CREATE_APPOINTMENT_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.PATIENT_APPOINTMENTS_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.PATIENT_CREDIT_CARD_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.PATIENT_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.SAVE_IMAGES_FOR_APPOINTMENT_ENDPOINT;

/**
 * Patient REST controller.
 */
@RestController
@CrossOrigin
@RequiredArgsConstructor
public class PatientController {

  private final PatientService patientService;


  /**
   * Saves the personal data of the patient.
   *
   * @param patientRegisterDto the patient personal data.
   * @return the {@link Patient}.
   */
  @RequestMapping(
    value = PATIENT_ENDPOINT,
    method = RequestMethod.POST)
  public Patient savePatient(
    @RequestBody PatientRegisterDto patientRegisterDto) {

    Patient patient = patientService.savePatient(patientRegisterDto);

    return patient;
  }

  /**
   * Saves the credit card - payment data of the patient.
   *
   * @param patientId the patient id.
   * @param creditCard the patient credit card data.
   * @return the {@link Patient}.
   */
  @RequestMapping(
    value = PATIENT_CREDIT_CARD_ENDPOINT,
    method = RequestMethod.POST)
  public Patient saveCreditCard(@RequestParam Long patientId,
                                @RequestBody CreditCard creditCard) {

    Patient patient = patientService.saveCreditCard(creditCard, patientId);

    return patient;
  }

  /**
   * Returns the list of appointments for patient.
   *
   * @param patientId the patient id.
   * @return the {@link List<AppointmentDtoForClientReview>}.
   */
  @RequestMapping(
    value = PATIENT_APPOINTMENTS_ENDPOINT,
    method = RequestMethod.GET)
  @ResponseBody
  public List<AppointmentDtoForClientReview> getAppointments(@RequestParam Long patientId) {

  List<AppointmentDtoForClientReview> appointments = patientService.getAppointments(patientId);

    return appointments;
  }

  /**
   * Create appointment by the patient.
   *
   * @param patientId the patient id.
   * @param createAppointmentDto the patient credit card data.
   * @return the {@link Long}.
   */
  @RequestMapping(
    value = CREATE_APPOINTMENT_ENDPOINT,
    method = RequestMethod.POST)
  public Long createAppointment(@RequestParam Long patientId,
                                       @RequestBody CreateAppointmentDto createAppointmentDto) {

    Long appointmentId = patientService.createAppointment(patientId, createAppointmentDto);

    return appointmentId;
  }

  /**
   * Save images for the appointment by the patient.
   *
   * @param appointmentId the appointment id.
   * @param files the patient credit card data.
   * @return the {@link Patient}.
   */
  @RequestMapping(
    value = SAVE_IMAGES_FOR_APPOINTMENT_ENDPOINT,
    method = RequestMethod.POST)
  public Long saveImagesToAppointment(@RequestParam Long appointmentId, @RequestParam("files") List<MultipartFile> files) {


    return Long.valueOf(files.size());
  }
}
