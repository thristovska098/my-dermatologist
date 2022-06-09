package com.mydermatologist.dto;

import com.mydermatologist.domain.AppointmentStatus;
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
public class AppointmentDtoForDoctorReview {

  private Long id;

  private String title;

  private String description;

  private AppointmentStatus appointmentStatus;

  private Date createdOn;

  private PatientDtoForDoctorReview patient;
}
