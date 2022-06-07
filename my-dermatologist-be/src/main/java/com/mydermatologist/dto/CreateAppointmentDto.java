package com.mydermatologist.dto;

import com.mydermatologist.domain.Avatar;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

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

   private String doctorId;

   private List<Avatar> images;
}
