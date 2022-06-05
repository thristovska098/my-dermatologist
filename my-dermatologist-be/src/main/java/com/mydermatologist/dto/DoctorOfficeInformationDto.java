package com.mydermatologist.dto;

import com.mydermatologist.domain.Office;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Dto that represents the model for doctor registering professional info form.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorOfficeInformationDto {

  private String code;

  private Office office;
}
