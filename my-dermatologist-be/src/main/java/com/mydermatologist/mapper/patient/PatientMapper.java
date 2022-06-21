package com.mydermatologist.mapper.patient;

import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.PatientDtoForDoctorReview;
import com.mydermatologist.dto.PatientRegisterDto;

/**
 * Patient mapper interface.
 */
public interface PatientMapper {


  /**
   * Maps the patient form data to patient domain model.
   *
   * @param patientRegisterDto the patient data.
   * @param userId the patient id.
   * @return the {@link Patient}.
   */
  Patient mapPatientFormDataToPatientDomain(PatientRegisterDto patientRegisterDto, Long userId);

  /**
   * Maps the patient domain model to patient dto for doctor review.
   *
   * @param patient the patient data.
   * @return the {@link PatientDtoForDoctorReview}.
   */
  PatientDtoForDoctorReview mapPatientDomainToPatientDtoForDoctorReview(Patient patient);
}
