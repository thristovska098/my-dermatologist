package com.mydermatologist.controller.doctor;

import com.mydermatologist.domain.CreditCard;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.dto.AppointmentDtoForDoctorReview;
import com.mydermatologist.dto.DoctorDtoForPatientSelection;
import com.mydermatologist.dto.DoctorOfficeInformationDto;
import com.mydermatologist.dto.DoctorPersonalDataDto;
import com.mydermatologist.dto.MedicalReportDto;

import java.util.List;


/**
 * Doctor REST controller interface.
 */
public interface DoctorController {

  /**
   * Saves the personal data of the doctor.
   *
   * @param userId doctor id.
   * @param doctorPersonalDataDto the doctor personal data.
   * @return the {@link Doctor}.
   */
  Doctor saveDoctor(Long userId, DoctorPersonalDataDto doctorPersonalDataDto);


  /**
   * Saves the credit card data of the doctor.
   *
   * @param doctorId the doctor id.
   * @param creditCard thecredit card data.
   * @return the {@link Doctor}.
   */
  Doctor saveCreditCard(Long doctorId, CreditCard creditCard);

  /**
   * Saves the professional - office information for the doctor.
   *
   * @param doctorId the doctor id.
   * @param officeInformationDto the doctor office information.
   * @return the {@link Doctor}.
   */
  Doctor saveOfficeInformation(Long doctorId, DoctorOfficeInformationDto officeInformationDto);

  /**
   * Returns appointments for the doctor.
   *
   * @param doctorId the doctor id.
   * @return the {@link List < AppointmentDtoForDoctorReview >}.
   */
  List<AppointmentDtoForDoctorReview> getAppointments(Long doctorId);

  /**
   * Creates medical report.
   *
   * @param appointmentId the appointment id.
   * @return the {@link Doctor}.
   */
  Doctor createMedicalReport(Long appointmentId, MedicalReportDto medicalReport);

  /**
   * Returns all available doctors.
   *
   * @return the {@link List<DoctorDtoForPatientSelection>}.
   */
  List<DoctorDtoForPatientSelection> getDoctors();
}
