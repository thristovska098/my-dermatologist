package com.mydermatologist.dto;

import com.mydermatologist.domain.PersonalData;
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
public class PatientRegisterDto {

  private PersonalData personalData;
}
