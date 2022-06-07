package com.mydermatologist.mapper.appointment;

import com.mydermatologist.domain.Appointment;
import com.mydermatologist.domain.AppointmentStatus;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.AppointmentDtoForClientReview;
import com.mydermatologist.dto.CreateAppointmentDto;
import com.mydermatologist.dto.DoctorDtoForClientReview;
import com.mydermatologist.mapper.doctor.DoctorMapper;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@NoArgsConstructor
public class AppointmentMapper {

  @Autowired
  private DoctorMapper doctorMapper;

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

  public AppointmentDtoForClientReview mapAppointmentToAppointmentForClientReview(Appointment appointment) {
    AppointmentDtoForClientReview appointmentForClientReviewDto = new AppointmentDtoForClientReview();

    Doctor doctor = appointment.getDoctor();
    DoctorDtoForClientReview doctorDtoForClientReview = doctorMapper.mapDoctorDomainToDoctorDtoForClientReview(doctor);

    appointmentForClientReviewDto.setAppointmentStatus(appointment.getAppointmentStatus());
    appointmentForClientReviewDto.setCreatedOn(appointment.getCreatedOn());
    appointmentForClientReviewDto.setId(appointment.getId());
    appointmentForClientReviewDto.setTitle(appointment.getTitle());
    appointmentForClientReviewDto.setMedicalDiagnosis(appointment.getMedicalDiagnosis());
    appointmentForClientReviewDto.setMedicalPrescription(appointment.getMedicalPrescription());
    appointmentForClientReviewDto.setTreatment(appointment.getTreatment());
    appointmentForClientReviewDto.setDoctor(doctorDtoForClientReview);

    return appointmentForClientReviewDto;
  }
}
