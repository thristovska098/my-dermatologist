package com.mydermatologist.controller.doctor;

import com.mydermatologist.domain.CreditCard;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.dto.AppointmentDtoForDoctorReview;
import com.mydermatologist.dto.DoctorDtoForPatientSelection;
import com.mydermatologist.dto.DoctorOfficeInformationDto;
import com.mydermatologist.dto.DoctorPersonalDataDto;
import com.mydermatologist.dto.MedicalReportDto;
import com.mydermatologist.service.doctor.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.mydermatologist.controller.RestControllerConstants.CREATE_MEDICAL_REPORT_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.DOCTOR_APPOINTMENTS_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.DOCTOR_CREDIT_CARD_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.DOCTOR_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.DOCTOR_OFFICE_INFORMATION_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.FETCH_DOCTORS_ENDPOINT;

/**
 * Doctor REST controller implementation.
 */
@RestController
public class DoctorControllerImpl implements DoctorController {

  private final DoctorService doctorService;

  @Autowired
  public DoctorControllerImpl(DoctorService doctorService) {
    this.doctorService = doctorService;
  }

  /**
   * Saves the personal data of the doctor.
   *
   * @param userId doctor id.
   * @param doctorPersonalDataDto the doctor personal data.
   * @return the {@link Doctor}.
   */
  @RequestMapping(value = DOCTOR_ENDPOINT, method = RequestMethod.POST)
  public DoctorPersonalDataDto saveDoctor(
    @RequestParam Long userId,
    @RequestBody DoctorPersonalDataDto doctorPersonalDataDto) {

    doctorService.saveDoctor(userId, doctorPersonalDataDto);

    return doctorPersonalDataDto;
  }

  /**
   * Saves the credit card data of the doctor.
   *
   * @param doctorId the doctor id.
   * @param creditCard the credit card data.
   * @return the {@link CreditCard}.
   */
  @RequestMapping(value = DOCTOR_CREDIT_CARD_ENDPOINT, method = RequestMethod.POST)
  public CreditCard saveCreditCard(@RequestParam Long doctorId, @RequestBody CreditCard creditCard) {

    doctorService.saveCreditCard(doctorId, creditCard);

    return creditCard;
  }

  /**
   * Saves the professional - office information for the doctor.
   *
   * @param doctorId the doctor id.
   * @param officeInformationDto the doctor office information.
   * @return the {@link DoctorOfficeInformationDto}.
   */
  @RequestMapping(value = DOCTOR_OFFICE_INFORMATION_ENDPOINT, method = RequestMethod.POST)
  public DoctorOfficeInformationDto saveOfficeInformation(
    @RequestParam Long doctorId,
    @RequestBody DoctorOfficeInformationDto officeInformationDto) {

    doctorService.saveOfficeInformation(doctorId, officeInformationDto);

    return officeInformationDto;
  }

  /**
   * Returns appointments for the doctor.
   *
   * @param doctorId the doctor id.
   * @return the {@link List<AppointmentDtoForDoctorReview>}.
   */
  @ResponseBody
  @RequestMapping(value = DOCTOR_APPOINTMENTS_ENDPOINT, method = RequestMethod.GET)
  public List<AppointmentDtoForDoctorReview> getAppointments(@RequestParam Long doctorId) {

    List<AppointmentDtoForDoctorReview> appointments = doctorService.getAppointments(doctorId);

    return appointments;
  }

  /**
   * Creates medical report.
   *
   * @param appointmentId the appointment id.
   * @return the {@link Doctor}.
   */
  @RequestMapping(value = CREATE_MEDICAL_REPORT_ENDPOINT, method = RequestMethod.POST)
  public Doctor createMedicalReport(@RequestParam Long appointmentId, @RequestBody MedicalReportDto medicalReport) {

    Doctor doctor = doctorService.createMedicalReport(appointmentId, medicalReport);

    return doctor;
  }

  /**
   * Returns all available doctors.
   *
   * @return the {@link List<DoctorDtoForPatientSelection>}.
   */
  @RequestMapping(value = FETCH_DOCTORS_ENDPOINT, method = RequestMethod.GET)
  @ResponseBody
  public List<DoctorDtoForPatientSelection> getDoctors() {

    List<DoctorDtoForPatientSelection> doctors = doctorService.getDoctors();

    return doctors;
  }
}
