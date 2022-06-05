package com.mydermatologist.dto;

import com.mydermatologist.domain.Avatar;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * Dto that represents the model shown in creating appointment by the patient.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDtoForCreatingAppointment {

  private String code;

  private String name;

  private String lastName;

  private List<Avatar> images;
}
