package com.mydermatologist.controller;


import com.mydermatologist.domain.CreditCard;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.dto.DoctorPersonalDataDto;
import com.mydermatologist.service.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.mydermatologist.controller.RestControllerConstants.DOCTOR_CREDIT_CARD_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.DOCTOR_ENDPOINT;

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
   * Saves the credit cardit data of the doctor.
   *
   * @param doctorId the doctor id.
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
}
