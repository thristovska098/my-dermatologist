package com.mydermatologist.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * Dto that represents the model the patient homepage.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatientHomePageDto {
  List<AppointmentDtoForClientReview> appointments;
}
