package com.mydermatologist.service;

import com.mydermatologist.domain.Appointment;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.CreateAppointmentDto;
import com.mydermatologist.mapper.appointment.AppointmentMapper;
import com.mydermatologist.repository.AppointmentRepository;
import com.mydermatologist.repository.DoctorRepository;
import com.mydermatologist.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class AppointmentService {

  @Autowired
  private AppointmentMapper appointmentMapper;

  @Autowired
  private AppointmentRepository appointmentRepository;

  @Autowired
  private DoctorRepository doctorRepository;

  @Autowired
  private PatientRepository patientRepository;

  public Patient createAppointment(@RequestParam Long patientId,
                                   @RequestBody CreateAppointmentDto createAppointmentDto) {

    // TODO: throw exceptions
    Patient patient = patientRepository.findById(patientId).orElse(null);
   //  Doctor doctor = doctorRepository.findById(createAppointmentDto.getDoctorCode()).orElse(null);

    Appointment appointment = appointmentMapper.mapCreateAppointmentDtoToAppointment(
      createAppointmentDto,
      patient,
      null);

    appointmentRepository.save(appointment);

    return patient;
  }
}