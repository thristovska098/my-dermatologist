package com.mydermatologist.controller;

import com.mydermatologist.domain.Appointment;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.AppointmentDtoForClientReview;
import com.mydermatologist.dto.CreateAppointmentDto;
import com.mydermatologist.dto.PatientRegisterDto;
import com.mydermatologist.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

import static com.mydermatologist.controller.RestControllerConstants.APPOINTMENT_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.CREATE_APPOINTMENT_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.PATIENT_APPOINTMENTS_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.PATIENT_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.SAVE_IMAGES_FOR_APPOINTMENT_ENDPOINT;

/**
 * Patient REST controller.
 */
@RestController
@RequiredArgsConstructor
public class PatientController {

  private final PatientService patientService;


  /**
   * Saves the personal data of the patient.
   *
   * @param patientRegisterDto the patient personal data.
   * @param userId the patient id.
   * @return the {@link Patient}.
   */
  @RequestMapping(
    value = PATIENT_ENDPOINT,
    method = RequestMethod.POST)
  public Patient savePatient(@RequestBody PatientRegisterDto patientRegisterDto, @RequestParam Long userId) {

    Patient patient = patientService.savePatient(patientRegisterDto, userId);

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
   * @param createAppointmentDto the patient appointment data.
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
   * @param files the patient images for the appointment.
   * @return the {@link Appointment}.
   */
  @RequestMapping(
    value = SAVE_IMAGES_FOR_APPOINTMENT_ENDPOINT,
    method = RequestMethod.POST)
  public Appointment saveImagesToAppointment(@RequestParam Long appointmentId,
                                             @RequestParam("files") List<MultipartFile> files) {

    Appointment appointment = patientService.saveImagesToAppointment(appointmentId, files);

    return appointment;
  }

  /**
   * Delete appointment with id.
   *
   * @param appointmentId the appointment id.
   */
  @RequestMapping(
    value = APPOINTMENT_ENDPOINT,
    method = RequestMethod.DELETE)
  public void deleteAppointment(@RequestParam Long appointmentId) {

    patientService.deleteAppointment(appointmentId);
  }
}
