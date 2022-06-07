package com.mydermatologist.service;

import com.mydermatologist.domain.CreditCard;
import com.mydermatologist.domain.Doctor;
import com.mydermatologist.dto.DoctorOfficeInformationDto;
import com.mydermatologist.dto.DoctorPersonalDataDto;
import com.mydermatologist.mapper.doctor.DoctorMapper;
import com.mydermatologist.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Doctor service.
 */
@Service
public class DoctorService {

  @Autowired
  private DoctorMapper doctorMapper;

  @Autowired
  private DoctorRepository doctorRepository;

  /**
   * Saves form data for doctor.
   *
   * @param doctorPersonalDataDto the doctor data.
   * @return the {@link Doctor}.
   */
  public Doctor saveDoctor(DoctorPersonalDataDto doctorPersonalDataDto){
    Doctor doctor = doctorMapper.mapDoctorFormDataToDomain(doctorPersonalDataDto);

    doctorRepository.save(doctor);

    return doctor;
  }

  /**
   * Saves credit card data for doctor.
   *
   * @param doctorId the doctor id.
   * @param creditCard the credit card data.
   * @return the {@link Doctor}.
   */
  public Doctor saveCreditCard(Long doctorId, CreditCard creditCard){
    // TODO: add exceptions
    Doctor doctor = doctorRepository.findById(doctorId).orElse(null);
    doctor.setCreditCard(creditCard);

    doctorRepository.save(doctor);

    return doctor;
  }

  /**
   * Saves office information data for doctor.
   *
   * @param doctorId the doctor id.
   * @param officeInformationDto the office data.
   * @return the {@link Doctor}.
   */
  public Doctor saveOfficeInformation(Long doctorId, DoctorOfficeInformationDto officeInformationDto){
    // TODO: add exceptions
    Doctor doctor = doctorRepository.findById(doctorId).orElse(null);
    doctor = doctorMapper.mapOfficeInformationToDoctorDomain(doctor, officeInformationDto);

    doctorRepository.save(doctor);

    return doctor;
  }
}
