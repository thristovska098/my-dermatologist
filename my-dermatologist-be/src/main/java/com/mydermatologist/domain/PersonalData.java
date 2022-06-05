package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.MappedSuperclass;
import java.util.Date;

/**
 * Personal data model.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class PersonalData {

  private String name;

  private String lastName;

  private Date dateOfBirth;

  private Gender gender;

  private ContactInformation contactInformation;

}
