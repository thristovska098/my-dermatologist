package com.mydermatologist.dto;

import com.mydermatologist.domain.AppointmentStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

/**
 * Dto that represents the model returned for patients appointment results.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDtoForClientReview {

  private String id;

  private String title;

  private AppointmentStatus appointmentStatus;

  private Date createdOn;

  private String medicalDiagnosis;

  private String medicalPrescription;

  private  String treatment;

  private DoctorDtoForClientReview doctor;
}
