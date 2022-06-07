package com.mydermatologist.service;

import com.mydermatologist.domain.CreditCard;
import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.PatientRegisterDto;
import com.mydermatologist.mapper.patient.PatientMapper;
import com.mydermatologist.repository.CreditCardRepository;
import com.mydermatologist.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PatientService {

  @Autowired
  private PatientMapper patientMapper;

  @Autowired
  private PatientRepository patientRepository;

  @Autowired
  private CreditCardRepository creditCardRepository;


  public Patient savePatient(PatientRegisterDto patientRegisterDto) {

    Patient patient = patientMapper.mapPatientFormDataToPatientDomain(patientRegisterDto);
    Patient savedPatient = patientRepository.save(patient);

    return savedPatient;
  }

  public Patient saveCreditCard(CreditCard creditCard, Long patientId) {
    CreditCard savedCreditCard = creditCardRepository.save(creditCard);

    // TODO: throw exceptions
    Optional<Patient> patient = patientRepository.findById(patientId);

    if (patient.isPresent()) {
      patient.get().setCreditCard(savedCreditCard);
      return patientRepository.save(patient.get());
    } else return null;
  }
}
