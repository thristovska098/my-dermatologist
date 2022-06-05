package com.mydermatologist.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Dto that represents the model for making payment by the patient.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MakePaymentDto {

  private String doctorCode;

  private String patientCode;

  private Integer paymentAmount;

  private String paymentCurrency;
}
