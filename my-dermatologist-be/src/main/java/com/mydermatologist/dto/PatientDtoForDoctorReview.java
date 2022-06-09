package com.mydermatologist.dto;

import com.mydermatologist.domain.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

/**
 * Dto that represents the model returned for doctor appointment results.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatientDtoForDoctorReview {

  private String ssn;

  private String name;

  private  String lastName;

  private Gender gender;

  private Date dateOfBirth;

  private String email;

  private String phone;
}
