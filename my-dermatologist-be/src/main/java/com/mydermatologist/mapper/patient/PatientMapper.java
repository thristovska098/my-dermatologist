package com.mydermatologist.mapper.patient;

import com.mydermatologist.domain.Patient;
import com.mydermatologist.dto.PatientRegisterDto;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
public class PatientMapper {

  public Patient mapPatientFormDataToPatientDomain(PatientRegisterDto patientRegisterDto){
    Patient patient = new Patient();

    patient.setPersonalData(patientRegisterDto.getPersonalData());

    return patient;
  }
}
