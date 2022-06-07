package com.mydermatologist.mapper.appointment;

import com.mydermatologist.domain.Appointment;
import com.mydermatologist.domain.AppointmentStatus;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.CreateAppointmentDto;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@NoArgsConstructor
public class AppointmentMapper {

  public Appointment mapCreateAppointmentDtoToAppointment(CreateAppointmentDto createAppointmentDto, Patient patient, Doctor doctor) {
    Appointment appointment = new Appointment();

    appointment.setAppointmentStatus(AppointmentStatus.WAITING);
    appointment.setCreatedOn(new Date());
    appointment.setDescription(createAppointmentDto.getDescription());
    appointment.setTitle(createAppointmentDto.getTitle());
    appointment.setImages(createAppointmentDto.getImages());
    appointment.setDoctor(doctor);
    appointment.setPatient(patient);

    return appointment;
  }
}
