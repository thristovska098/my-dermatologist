package com.mydermatologist.controller.patient;

import com.mydermatologist.domain.Appointment;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.AppointmentDtoForClientReview;
import com.mydermatologist.dto.CreateAppointmentDto;
import com.mydermatologist.dto.PatientRegisterDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


/**
 * Patient REST controller interface.
 */
public interface PatientController {


  /**
   * Saves the personal data of the patient.
   *
   * @param patientRegisterDto the patient personal data.
   * @param userId the patient id.
   * @return the {@link Patient}.
   */
  Patient savePatient(PatientRegisterDto patientRegisterDto, Long userId);

  /**
   * Returns the list of appointments for patient.
   *
   * @param patientId the patient id.
   * @return the {@link List < AppointmentDtoForClientReview >}.
   */
  List<AppointmentDtoForClientReview> getAppointments(Long patientId);

  /**
   * Create appointment by the patient.
   *
   * @param patientId the patient id.
   * @param createAppointmentDto the patient appointment data.
   * @return the {@link Long}.
   */

  Long createAppointment(Long patientId, CreateAppointmentDto createAppointmentDto);

  /**
   * Save images for the appointment by the patient.
   *
   * @param appointmentId the appointment id.
   * @param files the patient images for the appointment.
   * @return the {@link Appointment}.
   */
  Appointment saveImagesToAppointment(Long appointmentId, List<MultipartFile> files);

  /**
   * Delete appointment with id.
   *
   * @param appointmentId the appointment id.
   */
  void deleteAppointment(Long appointmentId);
}
