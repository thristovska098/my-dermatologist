package com.mydermatologist.service.patient;

import com.mydermatologist.domain.Appointment;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.AppointmentDtoForClientReview;
import com.mydermatologist.dto.CreateAppointmentDto;
import com.mydermatologist.dto.PatientRegisterDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Patient service interface.
 */
public interface PatientService {

  /**
   * Saves form data for patient.
   *
   * @param patientRegisterDto the patient data.
   * @param userId the patient id.
   * @return the {@link Patient}.
   */
  Patient savePatient(PatientRegisterDto patientRegisterDto, Long userId);

  /**
   * Returns appointments for patient.
   *
   * @param patientId the patient id.
   * @return the {@link List < AppointmentDtoForClientReview >}.
   */
  List<AppointmentDtoForClientReview> getAppointments(Long patientId);

  /**
   * Creates new appointment.
   *
   * @param patientId the doctor data.
   * @param createAppointmentDto the appointment data.
   * @return the {@link Long}.
   */
  Long createAppointment(Long patientId, CreateAppointmentDto createAppointmentDto);

  /**
   * Delete appointment.
   *
   * @param appointmentId the id of appointment.
   */
  void deleteAppointment(Long appointmentId);

  /**
   * Save images for appointment.
   *
   * @param appointmentId the id of appointment.
   * @param files the images.
   * @return the {@link Appointment}.
   */
  Appointment saveImagesToAppointment(Long appointmentId, List<MultipartFile> files);
}
