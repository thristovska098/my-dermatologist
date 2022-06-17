package com.mydermatologist.mapper.doctor;

import com.mydermatologist.domain.Doctor;
import com.mydermatologist.dto.DoctorDtoForClientReview;
import com.mydermatologist.dto.DoctorDtoForPatientSelection;
import com.mydermatologist.dto.DoctorOfficeInformationDto;
import com.mydermatologist.dto.DoctorPersonalDataDto;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

/**
 * Doctor mapper.
 */
@Component
@NoArgsConstructor
public class DoctorMapper {

  /**
   * Maps the doctor domain data to doctor data gor client review.
   *
   * @param doctor the doctor data.
   * @return the {@link DoctorDtoForClientReview}.
   */
  public DoctorDtoForClientReview mapDoctorDomainToDoctorDtoForClientReview(Doctor doctor) {
    DoctorDtoForClientReview doctorDtoForClientReview = new DoctorDtoForClientReview();

    if(doctor.getPersonalData() != null) {
      doctorDtoForClientReview.setName(doctor.getPersonalData().getName());
      doctorDtoForClientReview.setLastName(doctor.getPersonalData().getLastName());
    }

    doctorDtoForClientReview.setOfficeInformation(doctor.getOffice());

    return doctorDtoForClientReview;
  }

  /**
   * Maps the doctor form data to doctor domain data.
   *
   * @param userId doctor id.
   * @param doctorPersonalDataDto the doctors personal data.
   * @return the {@link Doctor}.
   */
  public Doctor mapDoctorFormDataToDomain(Long userId, DoctorPersonalDataDto doctorPersonalDataDto) {
    Doctor doctor = new Doctor();

    doctor.setId(userId);
    doctor.setPersonalData(doctorPersonalDataDto.getPersonalData());

    return doctor;
  }

  /**
   * Maps the office information form data to doctor domain data.
   *
   * @param doctor the doctor domain data.
   * @param officeInformationDto the doctors office data.
   * @return the {@link Doctor}.
   */
  public Doctor mapOfficeInformationToDoctorDomain(Doctor doctor, DoctorOfficeInformationDto officeInformationDto) {
    doctor.setCode(officeInformationDto.getCode());
    doctor.setOffice(officeInformationDto.getOffice());

    return doctor;
  }

  /**
   * Maps the doctor domain model to dto shown in the patient dropdown selections.
   *
   * @param doctor the doctor domain data.
   * @return the {@link DoctorDtoForPatientSelection}.
   */
  public DoctorDtoForPatientSelection mapDoctorToModelForPatientSelection(Doctor doctor) {

    DoctorDtoForPatientSelection doctorDtoForPatientSelection = new DoctorDtoForPatientSelection();
    doctorDtoForPatientSelection.setId(doctor.getId());

    if(doctor.getPersonalData() != null) {
      doctorDtoForPatientSelection.setName(doctor.getPersonalData().getName());
      doctorDtoForPatientSelection.setLastName(doctor.getPersonalData().getLastName());
    }

    if(doctor.getOffice() != null) {
      doctorDtoForPatientSelection.setCity(doctor.getOffice().getOfficeContact().getAddress().getCity());
      doctorDtoForPatientSelection.setCountry(doctor.getOffice().getOfficeContact().getAddress().getCountry());
    }

    return doctorDtoForPatientSelection;
  }
}
