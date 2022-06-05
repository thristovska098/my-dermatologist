package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Contact information model.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactInformation {

  // The id represents identifier for the person/office that the address belongs to.
  @Id
  private String id;

  private String phone;

  private String email;
}
