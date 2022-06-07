package com.mydermatologist.mapper.patient;

import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.PatientRegisterDto;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * Patient mapper.
 */
@Component
@NoArgsConstructor
public class PatientMapper {

  /**
   * Maps the patient form data to patient domain model.
   *
   * @param patientRegisterDto the patient data.
   * @return the {@link Patient}.
   */
  public Patient mapPatientFormDataToPatientDomain(PatientRegisterDto patientRegisterDto){
    Patient patient = new Patient();

    patient.setPersonalData(patientRegisterDto.getPersonalData());

    return patient;
  }
}
