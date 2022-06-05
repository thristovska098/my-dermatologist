package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * Contact information model.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactInformation {

  @Id
  @GeneratedValue
  private String id;

  private String phone;

  private String email;

  @OneToOne
  private Address address;
}
