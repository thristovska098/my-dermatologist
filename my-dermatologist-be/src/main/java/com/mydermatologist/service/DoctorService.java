package com.mydermatologist.service;

import com.mydermatologist.domain.Appointment;
import com.mydermatologist.domain.Doctor;
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

}
