package com.mydermatologist.mapper.doctor;

import com.mydermatologist.domain.Doctor;
import com.mydermatologist.dto.DoctorDtoForClientReview;
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

    doctorDtoForClientReview.setName(doctor.getPersonalData().getName());
    doctorDtoForClientReview.setLastName(doctor.getPersonalData().getLastName());
    doctorDtoForClientReview.setOfficeInformation(doctor.getOffice());

    return doctorDtoForClientReview;
  }

  /**
   * Maps the doctor form data to doctor domain data.
   *
   * @param doctorPersonalDataDto the doctors personal data.
   * @return the {@link Doctor}.
   */
  public Doctor mapDoctorFormDataToDomain(DoctorPersonalDataDto doctorPersonalDataDto) {
    Doctor doctor = new Doctor();

    doctor.setPersonalData(doctorPersonalDataDto.getDoctor());

    return doctor;
  }
}
