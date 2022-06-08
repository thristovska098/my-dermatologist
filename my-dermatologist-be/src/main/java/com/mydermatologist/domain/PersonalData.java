package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Date;

/**
 * Personal data model.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PersonalData {

  @Id
  private String ssn;

  private String name;

  private String lastName;

  private Date dateOfBirth;

  private Gender gender;

 @OneToOne(cascade = CascadeType.ALL)
  private ContactInformation contactInformation;
}
