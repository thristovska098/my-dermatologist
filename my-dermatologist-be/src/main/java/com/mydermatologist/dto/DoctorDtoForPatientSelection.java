package com.mydermatologist.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Dto that represents the model returned in for patients dropdown options.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDtoForPatientSelection {

  private Long id;

  private String name;

  private String lastName;

  private String city;

  private String country;
}
