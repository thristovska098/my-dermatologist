package com.mydermatologist.dto;

import com.mydermatologist.domain.PersonalData;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Dto that represents the model for doctor registering personal info form.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorPersonalDataDto {

  private PersonalData doctor;
}
