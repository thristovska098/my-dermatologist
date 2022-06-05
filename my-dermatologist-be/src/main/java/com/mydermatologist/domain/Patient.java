package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Generated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.List;

/**
 * Patient model.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Patient {

  @Id
  @Generated
  private String code;

  @OneToOne
  private PersonalData personalData;

  @OneToOne
  private CreditCard creditCard;

  @OneToMany(mappedBy = "patient", cascade = {CascadeType.REFRESH, CascadeType.PERSIST,CascadeType.MERGE}, fetch = FetchType.LAZY)
  private List<Appointment> appointments;
}
