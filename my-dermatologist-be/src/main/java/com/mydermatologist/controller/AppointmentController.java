package com.mydermatologist.controller;

import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.CreateAppointmentDto;
import com.mydermatologist.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.mydermatologist.controller.RestControllerConstants.CREATE_APPOINTMENT_ENDPOINT;

/**
 * Appointment REST controller.
 */
@RestController
@RequiredArgsConstructor
public class AppointmentController {

  private final AppointmentService appointmentService;

  /**
   * Create appointment by the patient.
   *
   * @param patientId the patient id.
   * @param createAppointmentDto the patient credit card data.
   * @return the {@link Patient}.
   */
  @RequestMapping(
    value = CREATE_APPOINTMENT_ENDPOINT,
    method = RequestMethod.POST)
  public Patient createAppointment(@RequestParam Long patientId,
                                   @RequestBody CreateAppointmentDto createAppointmentDto) {

    Patient patient = appointmentService.createAppointment(patientId, createAppointmentDto);

    return patient;
  }
}
