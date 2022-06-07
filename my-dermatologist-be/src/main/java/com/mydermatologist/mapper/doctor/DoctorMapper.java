package com.mydermatologist.mapper.doctor;

import com.mydermatologist.domain.Doctor;
import com.mydermatologist.dto.DoctorDtoForClientReview;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
public class DoctorMapper {

  public DoctorDtoForClientReview mapDoctorDomainToDoctorDtoForClientReview(Doctor doctor){
    DoctorDtoForClientReview doctorDtoForClientReview = new DoctorDtoForClientReview();
if(doctor!=null) {
  doctorDtoForClientReview.setName(doctor.getPersonalData().getName());
  doctorDtoForClientReview.setLastName(doctor.getPersonalData().getLastName());
  doctorDtoForClientReview.setOfficeInformation(doctor.getOffice());
}

    return doctorDtoForClientReview;
  }
}
