package com.mydermatologist.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Dto that represents the model for created medical report from doctor.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicalReportDto {
  private String medicalDiagnosis;

  private String medicalPrescription;

  private  String treatment;
}
