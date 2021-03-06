package com.mydermatologist.mapper.appointment;

import com.mydermatologist.domain.Appointment;
import com.mydermatologist.domain.AppointmentStatus;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.domain.Image;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.AppointmentDtoForClientReview;
import com.mydermatologist.dto.AppointmentDtoForDoctorReview;
import com.mydermatologist.dto.CreateAppointmentDto;
import com.mydermatologist.dto.DoctorDtoForClientReview;
import com.mydermatologist.dto.MedicalReportDto;
import com.mydermatologist.dto.PatientDtoForDoctorReview;
import com.mydermatologist.mapper.doctor.DoctorMapper;
import com.mydermatologist.mapper.patient.PatientMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Appointment mapper implementation.
 */
@Component
public class AppointmentMapperImpl implements  AppointmentMapper{

  private final DoctorMapper doctorMapper;

  private final PatientMapper patientMapper;

  @Autowired
  public AppointmentMapperImpl(DoctorMapper doctorMapper, PatientMapper patientMapper) {
    this.doctorMapper = doctorMapper;
    this.patientMapper = patientMapper;
  }

  /**
   * Maps the data for creating appointment to appointment domain model.
   *
   * @param createAppointmentDto the appointment form data.
   * @param patient the patient data.
   * @param doctor the doctor data.
   * @return the {@link Appointment}.
   */
  public Appointment mapCreateAppointmentDtoToAppointment(
    CreateAppointmentDto createAppointmentDto,
    Patient patient,
    Doctor doctor) {
    Appointment appointment = new Appointment();

    appointment.setAppointmentStatus(AppointmentStatus.WAITING);
    appointment.setCreatedOn(new Date());
    appointment.setDescription(createAppointmentDto.getDescription());
    appointment.setTitle(createAppointmentDto.getTitle());
    appointment.setDoctor(doctor);
    appointment.setPatient(patient);

    return appointment;
  }

  /**
   * Maps the domain model for appointment to data for appointment for client review.
   *
   * @param appointment the appointment data.
   * @return the {@link AppointmentDtoForClientReview}.
   */
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
    appointmentForClientReviewDto.setDescription(appointment.getDescription());

    return appointmentForClientReviewDto;
  }

  /**
   * Maps the domain model for appointment to data for appointment for doctor review.
   *
   * @param appointment the appointment data.
   * @return the {@link AppointmentDtoForDoctorReview}.
   */
  public AppointmentDtoForDoctorReview mapAppointmentToAppointmentForDoctorReview(Appointment appointment) {
    AppointmentDtoForDoctorReview appointmentDtoForDoctorReview = new AppointmentDtoForDoctorReview();

    Patient patient = appointment.getPatient();
    PatientDtoForDoctorReview patientDtoForDoctorReview =
      patientMapper.mapPatientDomainToPatientDtoForDoctorReview(patient);

    appointmentDtoForDoctorReview.setId(appointment.getId());
    appointmentDtoForDoctorReview.setTitle(appointment.getTitle());
    appointmentDtoForDoctorReview.setDescription(appointment.getDescription());
    appointmentDtoForDoctorReview.setAppointmentStatus(appointment.getAppointmentStatus());
    appointmentDtoForDoctorReview.setCreatedOn(appointment.getCreatedOn());
    appointmentDtoForDoctorReview.setPatient(patientDtoForDoctorReview);
    appointmentDtoForDoctorReview.setImages(appointment.getImages());

    return appointmentDtoForDoctorReview;
  }

  /**
   * Maps the medical report to appointment domain model.
   *
   * @param appointment the appointment data.
   * @param medicalReportDto the medical report.
   */
  public void  mapMedicalReportToAppointmentDomain(Appointment appointment, MedicalReportDto medicalReportDto) {

    appointment.setMedicalDiagnosis(medicalReportDto.getMedicalDiagnosis());
    appointment.setMedicalPrescription(medicalReportDto.getMedicalPrescription());
    appointment.setTreatment(medicalReportDto.getTreatment());
    appointment.setAppointmentStatus(AppointmentStatus.COMPLETED);
  }

  /**
   * Maps multipart files to image domain model.
   *
   * @param files the files.
   * @return the {@link List<Image>}.
   */
  public List<Image> mapMultipartFilesToImageDomain(List<MultipartFile> files) {

    List<Image> images = files.stream().map(file -> {
      Image image = new Image();
      image.setName(file.getOriginalFilename());
      image.setType(file.getContentType());

      try {
        image.setData(file.getBytes());
      } catch (IOException e) {
        throw new RuntimeException(e);
      }

      return image;
    }).collect(Collectors.toList());

    return images;
  }
}
