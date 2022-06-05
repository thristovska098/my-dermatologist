package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

/**
 * Contact information model.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class ContactInformation {

  @Id
  private long ssn;

  private Address address;

  private String phone;

  private String email;
}
