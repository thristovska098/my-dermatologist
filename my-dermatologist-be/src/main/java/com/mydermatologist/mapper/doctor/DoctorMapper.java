package com.mydermatologist.mapper.doctor;

import com.mydermatologist.domain.Doctor;
import com.mydermatologist.dto.DoctorDtoForClientReview;
import com.mydermatologist.dto.DoctorDtoForPatientSelection;
import com.mydermatologist.dto.DoctorOfficeInformationDto;
import com.mydermatologist.dto.DoctorPersonalDataDto;

/**
 * Doctor mapper interface.
 */
public interface DoctorMapper {

  /**
   * Maps the doctor domain data to doctor data gor client review.
   *
   * @param doctor the doctor data.
   * @return the {@link DoctorDtoForClientReview}.
   */
  DoctorDtoForClientReview mapDoctorDomainToDoctorDtoForClientReview(Doctor doctor);

  /**
   * Maps the doctor form data to doctor domain data.
   *
   * @param userId doctor id.
   * @param doctorPersonalDataDto the doctors personal data.
   * @return the {@link Doctor}.
   */
  Doctor mapDoctorFormDataToDomain(Long userId, DoctorPersonalDataDto doctorPersonalDataDto);

  /**
   * Maps the office information form data to doctor domain data.
   *
   * @param doctor the doctor domain data.
   * @param officeInformationDto the doctor's office data.
   * @return the {@link Doctor}.
   */
  Doctor mapOfficeInformationToDoctorDomain(Doctor doctor, DoctorOfficeInformationDto officeInformationDto);

  /**
   * Maps the doctor domain model to dto shown in the patient dropdown selections.
   *
   * @param doctor the doctor domain data.
   * @return the {@link DoctorDtoForPatientSelection}.
   */
  DoctorDtoForPatientSelection mapDoctorToModelForPatientSelection(Doctor doctor);
}
