package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.MappedSuperclass;

/**
 * Address model.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class Address {

  private String city;

  private String zipCode;

  private String street;

  private String streetNumber;

  private String country;
}
