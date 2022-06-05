package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Credit card model.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreditCard {

  @Id
  private String cardNumber;

  private String expirationDate;

  private String cvc;
}
