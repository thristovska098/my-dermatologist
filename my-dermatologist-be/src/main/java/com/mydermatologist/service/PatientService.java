package com.mydermatologist.service;

import com.mydermatologist.domain.CreditCard;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.AppointmentDtoForClientReview;
import com.mydermatologist.dto.PatientRegisterDto;
import com.mydermatologist.mapper.appointment.AppointmentMapper;
import com.mydermatologist.mapper.patient.PatientMapper;
import com.mydermatologist.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Patient service.
 */
@Service
public class PatientService {

  @Autowired
  private PatientMapper patientMapper;

  @Autowired
  private AppointmentMapper appointmentMapper;

  @Autowired
  private PatientRepository patientRepository;

  /**
   * Saves form data for patient.
   *
   * @param patientRegisterDto the patient data.
   * @return the {@link Patient}.
   */
  public Patient savePatient(PatientRegisterDto patientRegisterDto) {

    Patient patient = patientMapper.mapPatientFormDataToPatientDomain(patientRegisterDto);
    Patient savedPatient = patientRepository.save(patient);

    return savedPatient;
  }

  /**
   * Saves credit card for patient.
   *
   * @param creditCard the credit card data.
   * @param patientId the patient id.
   * @return the {@link Patient}.
   */
  public Patient saveCreditCard(CreditCard creditCard, Long patientId) {

    // TODO: throw exceptions
    Optional<Patient> patient = patientRepository.findById(patientId);

    if (patient.isPresent()) {
      patient.get().setCreditCard(creditCard);
      return patientRepository.save(patient.get());
    } else return null;
  }

  /**
   * Returns appointments for patient.
   *
   * @param patientId the patient id.
   * @return the {@link List<AppointmentDtoForClientReview>}.
   */
  public List<AppointmentDtoForClientReview> getAppointments(Long patientId) {
    Patient patient = patientRepository.findById(patientId).orElse(null);

    if (patient == null || patient.getAppointments().size() == 0) {
      return null;
    }

    List<AppointmentDtoForClientReview> appointments = patient.getAppointments().stream()
      .map(appointment -> appointmentMapper.mapAppointmentToAppointmentForClientReview(appointment))
      .collect(Collectors.toList());


    return appointments;
  }
}
