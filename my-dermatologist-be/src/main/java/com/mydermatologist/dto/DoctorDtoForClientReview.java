package com.mydermatologist.dto;

import com.mydermatologist.domain.Office;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Dto that represents the model returned in patients appointment results.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDtoForClientReview {

  private String name;

  private String lastName;

  private Office officeInformation;
}
