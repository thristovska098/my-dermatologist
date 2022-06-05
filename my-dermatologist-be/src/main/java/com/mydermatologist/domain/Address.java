package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Address model.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {

  // The id represents identifier for the person/office that the address belongs to.
  @Id
  private String id;

  private String city;

  private String zipCode;

  private String street;

  private String streetNumber;

  private String country;
}
