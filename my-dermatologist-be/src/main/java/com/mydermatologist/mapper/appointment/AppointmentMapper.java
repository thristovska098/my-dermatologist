package com.mydermatologist.mapper.appointment;

import com.mydermatologist.domain.Appointment;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.domain.Image;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.AppointmentDtoForClientReview;
import com.mydermatologist.dto.AppointmentDtoForDoctorReview;
import com.mydermatologist.dto.CreateAppointmentDto;
import com.mydermatologist.dto.MedicalReportDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Appointment mapper interface.
 */
public interface AppointmentMapper {

  /**
   * Maps the data for creating appointment to appointment domain model.
   *
   * @param createAppointmentDto the appointment form data.
   * @param patient the patient data.
   * @param doctor the doctor data.
   * @return the {@link Appointment}.
   */
  Appointment mapCreateAppointmentDtoToAppointment(CreateAppointmentDto createAppointmentDto, Patient patient, Doctor doctor);

  /**
   * Maps the domain model for appointment to data for appointment for client review.
   *
   * @param appointment the appointment data.
   * @return the {@link AppointmentDtoForClientReview}.
   */
  AppointmentDtoForClientReview mapAppointmentToAppointmentForClientReview(Appointment appointment);

  /**
   * Maps the domain model for appointment to data for appointment for doctor review.
   *
   * @param appointment the appointment data.
   * @return the {@link AppointmentDtoForDoctorReview}.
   */
  AppointmentDtoForDoctorReview mapAppointmentToAppointmentForDoctorReview(Appointment appointment);

  /**
   * Maps the medical report to appointment domain model.
   *
   * @param appointment the appointment data.
   * @param medicalReportDto the medical report.
   */
  void mapMedicalReportToAppointmentDomain(Appointment appointment, MedicalReportDto medicalReportDto);

  /**
   * Maps multipart files to image domain model.
   *
   * @param files the files.
   * @return the {@link List < Image >}.
   */
  List<Image> mapMultipartFilesToImageDomain(List<MultipartFile> files);
}
