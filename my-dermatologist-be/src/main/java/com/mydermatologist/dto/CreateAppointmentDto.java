package com.mydermatologist.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Dto that represents the model creating appointment by the patient.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateAppointmentDto {

   private String title;

   private String description;

   private Long doctorId;

}
