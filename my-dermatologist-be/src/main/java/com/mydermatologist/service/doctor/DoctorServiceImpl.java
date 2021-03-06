package com.mydermatologist.service.doctor;

import com.mydermatologist.domain.Appointment;
import com.mydermatologist.domain.CreditCard;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.dto.AppointmentDtoForDoctorReview;
import com.mydermatologist.dto.DoctorDtoForPatientSelection;
import com.mydermatologist.dto.DoctorOfficeInformationDto;
import com.mydermatologist.dto.DoctorPersonalDataDto;
import com.mydermatologist.dto.MedicalReportDto;
import com.mydermatologist.mapper.appointment.AppointmentMapperImpl;
import com.mydermatologist.mapper.doctor.DoctorMapperImpl;
import com.mydermatologist.repository.AppointmentRepository;
import com.mydermatologist.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Doctor service implementation.
 */
@Service
public class DoctorServiceImpl implements DoctorService{

  private final DoctorMapperImpl doctorMapper;

  private final AppointmentMapperImpl appointmentMapper;

  private final DoctorRepository doctorRepository;

  private final AppointmentRepository appointmentRepository;

  @Autowired
  public DoctorServiceImpl(
    DoctorMapperImpl doctorMapper,
    AppointmentMapperImpl appointmentMapper,
    DoctorRepository doctorRepository,
    AppointmentRepository appointmentRepository) {
    this.doctorMapper = doctorMapper;
    this.appointmentMapper = appointmentMapper;
    this.doctorRepository = doctorRepository;
    this.appointmentRepository = appointmentRepository;
  }

  /**
   * Saves form data for doctor.
   *
   * @param userId doctor id.
   * @param doctorPersonalDataDto the doctor data.
   */
  public void saveDoctor(Long userId, DoctorPersonalDataDto doctorPersonalDataDto){
    Doctor doctor = doctorMapper.mapDoctorFormDataToDomain(userId, doctorPersonalDataDto);

    doctorRepository.save(doctor);
  }

  /**
   * Saves credit card data for doctor.
   *
   * @param doctorId the doctor id.
   * @param creditCard the credit card data.
   */
  public void saveCreditCard(Long doctorId, CreditCard creditCard){

    Doctor doctor = doctorRepository.findById(doctorId)
        .orElseThrow(()-> new RuntimeException("The doctor with id "+ doctorId+" doesn't exist"));

    doctor.setCreditCard(creditCard);

    doctorRepository.save(doctor);
  }

  /**
   * Saves office information data for doctor.
   *
   * @param doctorId the doctor id.
   * @param officeInformationDto the office data.
   */
  public void saveOfficeInformation(Long doctorId, DoctorOfficeInformationDto officeInformationDto){

    Doctor doctor = doctorRepository.findById(doctorId)
      .orElseThrow(()-> new RuntimeException("The doctor with id "+ doctorId+" doesn't exist"));

    doctor = doctorMapper.mapOfficeInformationToDoctorDomain(doctor, officeInformationDto);

    doctorRepository.save(doctor);
  }

  /**
   * Returns appointments for the doctor.
   *
   * @param doctorId the doctor id.
   * @return the {@link List<AppointmentDtoForDoctorReview>}.
   */
  public List<AppointmentDtoForDoctorReview> getAppointments(Long doctorId){

    Doctor doctor = doctorRepository.findById(doctorId)
      .orElseThrow(()-> new RuntimeException("The doctor with id "+ doctorId+" doesn't exist"));

    List<AppointmentDtoForDoctorReview> appointmentsDtoForDoctorReview = doctor.getAppointments()
      .stream().map(appointmentMapper::mapAppointmentToAppointmentForDoctorReview)
      .collect(Collectors.toList());

    return appointmentsDtoForDoctorReview;
  }

  /**
   * Creates medical report.
   *
   * @param appointmentId the appointment id.
   * @return the {@link Doctor}.
   */
  public Doctor createMedicalReport(
    Long appointmentId, MedicalReportDto medicalReport) {

    Appointment appointment = appointmentRepository.findById(appointmentId)
      .orElseThrow(()-> new RuntimeException("Appointment with id "+ appointmentId+ " doesn't exist."));

    appointmentMapper.mapMedicalReportToAppointmentDomain(appointment, medicalReport);

    appointmentRepository.save(appointment);

    return appointment.getDoctor();
  }

  /**
   * Returns all available doctors.
   *
   * @return the {@link List<DoctorDtoForPatientSelection>}.
   */
  public List<DoctorDtoForPatientSelection> getDoctors() {

    List<Doctor> doctors = doctorRepository.findAll();
    List<DoctorDtoForPatientSelection> doctorDtoForPatientSelections = doctors.stream()
      .map(doctorMapper::mapDoctorToModelForPatientSelection).collect(Collectors.toList());

    return doctorDtoForPatientSelections;
  }
}
