package com.mydermatologist.controller;


import com.mydermatologist.domain.CreditCard;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.dto.AppointmentDtoForDoctorReview;
import com.mydermatologist.dto.DoctorOfficeInformationDto;
import com.mydermatologist.dto.DoctorPersonalDataDto;
import com.mydermatologist.service.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.mydermatologist.controller.RestControllerConstants.DOCTOR_APPOINTMENTS_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.DOCTOR_CREDIT_CARD_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.DOCTOR_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.DOCTOR_OFFICE_INFORMATION_ENDPOINT;

/**
 * Doctor REST controller.
 */
@RestController
@RequiredArgsConstructor
public class DoctorController {

  private final DoctorService doctorService;

  /**
   * Saves the personal data of the doctor.
   *
   * @param doctorPersonalDataDto the doctor personal data.
   * @return the {@link Doctor}.
   */
  @RequestMapping(
    value = DOCTOR_ENDPOINT,
    method = RequestMethod.POST)
  public Doctor saveDoctor(
    @RequestBody DoctorPersonalDataDto doctorPersonalDataDto) {

    Doctor doctor = doctorService.saveDoctor(doctorPersonalDataDto);

    return doctor;
  }

  /**
   * Saves the credit card data of the doctor.
   *
   * @param doctorId the doctor id.
   *  @param creditCard thecredit card data.
   * @return the {@link Doctor}.
   */
  @RequestMapping(
    value = DOCTOR_CREDIT_CARD_ENDPOINT,
    method = RequestMethod.POST)
  public Doctor saveCreditCard(
    @RequestParam Long doctorId, @RequestBody CreditCard creditCard) {

    Doctor doctor = doctorService.saveCreditCard(doctorId, creditCard);

    return doctor;
  }

  /**
   * Saves the professional - office information for the doctor.
   *
   * @param doctorId the doctor id.
   * @param officeInformationDto the doctor office information.
   * @return the {@link Doctor}.
   */
  @RequestMapping(
    value = DOCTOR_OFFICE_INFORMATION_ENDPOINT,
    method = RequestMethod.POST)
  public Doctor saveOfficeInformation(
    @RequestParam Long doctorId, @RequestBody DoctorOfficeInformationDto officeInformationDto) {

    Doctor doctor = doctorService.saveOfficeInformation(doctorId, officeInformationDto);

    return doctor;
  }

  /**
   * Returns appointments for the doctor.
   *
   * @param doctorId the doctor id.
   * @return the {@link List<AppointmentDtoForDoctorReview>}.
   */
  @RequestMapping(
    value = DOCTOR_APPOINTMENTS_ENDPOINT,
    method = RequestMethod.GET)
  public List<AppointmentDtoForDoctorReview> getAppointments(
    @RequestParam Long doctorId) {

    List<AppointmentDtoForDoctorReview> appointments = doctorService.getAppointments(doctorId);

    return appointments;
  }
}
