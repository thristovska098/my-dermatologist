package com.mydermatologist.dto;

import com.mydermatologist.domain.CreditCard;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Dto that represents the model for updating the payment info by the doctor.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorPaymentInformationDto {

  private String doctorCode;

  private CreditCard creditCard;
}