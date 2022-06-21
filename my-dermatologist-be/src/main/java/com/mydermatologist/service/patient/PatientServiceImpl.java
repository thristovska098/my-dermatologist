package com.mydermatologist.service.patient;

import com.mydermatologist.domain.Appointment;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.domain.Image;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.AppointmentDtoForClientReview;
import com.mydermatologist.dto.CreateAppointmentDto;
import com.mydermatologist.dto.PatientRegisterDto;
import com.mydermatologist.mapper.appointment.AppointmentMapper;
import com.mydermatologist.mapper.patient.PatientMapper;
import com.mydermatologist.repository.AppointmentRepository;
import com.mydermatologist.repository.DoctorRepository;
import com.mydermatologist.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Patient service implementation.
 */
@Service
public class PatientServiceImpl implements PatientService{

  private final PatientMapper patientMapper;

  private final AppointmentMapper appointmentMapper;

  private final PatientRepository patientRepository;

  private final AppointmentRepository appointmentRepository;

  private final DoctorRepository doctorRepository;

  @Autowired
  public PatientServiceImpl(
    PatientMapper patientMapper,
    AppointmentMapper appointmentMapper,
    PatientRepository patientRepository,
    AppointmentRepository appointmentRepository,
    DoctorRepository doctorRepository) {
    this.patientMapper = patientMapper;
    this.appointmentMapper = appointmentMapper;
    this.patientRepository = patientRepository;
    this.appointmentRepository = appointmentRepository;
    this.doctorRepository = doctorRepository;
  }

  /**
   * Saves form data for patient.
   *
   * @param patientRegisterDto the patient data.
   * @param userId the patient id.
   * @return the {@link Patient}.
   */
  public Patient savePatient(PatientRegisterDto patientRegisterDto, Long userId) {

    Patient patient = patientMapper.mapPatientFormDataToPatientDomain(patientRegisterDto, userId);
    Patient savedPatient = patientRepository.save(patient);

    return savedPatient;
  }

  /**
   * Returns appointments for patient.
   *
   * @param patientId the patient id.
   * @return the {@link List<AppointmentDtoForClientReview>}.
   */
  public List<AppointmentDtoForClientReview> getAppointments(Long patientId) {
    Patient patient = patientRepository.findById(patientId)
      .orElseThrow(() -> new RuntimeException("The patient with id " + patientId + " doesn't exist."));

    if (patient.getAppointments().size() == 0) {
      return new LinkedList<>();
    }

    List<AppointmentDtoForClientReview> appointments = patient.getAppointments().stream()
      .map(appointmentMapper::mapAppointmentToAppointmentForClientReview)
      .collect(Collectors.toList());


    return appointments;
  }

  /**
   * Creates new appointment.
   *
   * @param patientId the doctor data.
   * @param createAppointmentDto the appointment data.
   * @return the {@link Long}.
   */
  public Long createAppointment(Long patientId, CreateAppointmentDto createAppointmentDto) {

    Patient patient = patientRepository.findById(patientId)
      .orElseThrow(() -> new RuntimeException("The patient with id " + patientId + " doesn't exist."));

    Doctor doctor = doctorRepository.findById(createAppointmentDto.getDoctorId())
      .orElseThrow(() -> new RuntimeException("The doctor with id " + createAppointmentDto.getDoctorId() + " doesn't exist"));

    Appointment appointment = appointmentMapper.mapCreateAppointmentDtoToAppointment(
      createAppointmentDto,
      patient,
      doctor);

    appointmentRepository.save(appointment);

    return appointment.getId();
  }


  /**
   * Delete appointment.
   *
   * @param appointmentId the id of appointment.
   */
  public void deleteAppointment(Long appointmentId) {

    appointmentRepository.deleteById(appointmentId);
  }

  /**
   * Save images for appointment.
   *
   * @param appointmentId the id of appointment.
   * @param files the images.
   * @return the {@link Appointment}.
   */
  public Appointment saveImagesToAppointment(Long appointmentId, List<MultipartFile> files) {

    Appointment appointment = appointmentRepository.findById(appointmentId)
      .orElseThrow(() -> new RuntimeException("The appointment with id " + appointmentId + " doesn't exist."));

    List<Image> image = appointmentMapper.mapMultipartFilesToImageDomain(files);

    appointment.setImages(image);

    appointmentRepository.save(appointment);

    return appointment;
  }
}
