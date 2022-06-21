package com.mydermatologist.mapper.patient;

import com.mydermatologist.domain.Patient;
import com.mydermatologist.domain.PersonalData;
import com.mydermatologist.dto.PatientDtoForDoctorReview;
import com.mydermatologist.dto.PatientRegisterDto;
import org.springframework.stereotype.Component;

/**
 * Patient mapper implementation.
 */
@Component
public class PatientMapperImpl implements PatientMapper{

  /**
   * Maps the patient form data to patient domain model.
   *
   * @param patientRegisterDto the patient data.
   * @param userId the patient id.
   * @return the {@link Patient}.
   */
  public Patient mapPatientFormDataToPatientDomain(PatientRegisterDto patientRegisterDto, Long userId) {
    Patient patient = new Patient();
    patient.setCode(userId);

    patient.setPersonalData(patientRegisterDto.getPersonalData());

    return patient;
  }


  /**
   * Maps the patient domain model to patient dto for doctor review.
   *
   * @param patient the patient data.
   * @return the {@link PatientDtoForDoctorReview}.
   */
  public PatientDtoForDoctorReview mapPatientDomainToPatientDtoForDoctorReview(Patient patient) {
    PatientDtoForDoctorReview patientDtoForDoctorReview = new PatientDtoForDoctorReview();
    PersonalData personalData = patient.getPersonalData();

    patientDtoForDoctorReview.setSsn(personalData.getSsn());
    patientDtoForDoctorReview.setName(personalData.getName());
    patientDtoForDoctorReview.setLastName(personalData.getLastName());
    patientDtoForDoctorReview.setGender(personalData.getGender());
    patientDtoForDoctorReview.setDateOfBirth(personalData.getDateOfBirth());

    if(personalData.getContactInformation() != null) {
      patientDtoForDoctorReview.setEmail(personalData.getContactInformation().getEmail());
      patientDtoForDoctorReview.setPhone(personalData.getContactInformation().getPhone());
    }

    return patientDtoForDoctorReview;
  }
}
