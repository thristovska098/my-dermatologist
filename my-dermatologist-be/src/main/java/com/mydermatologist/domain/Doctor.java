package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
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
 * Doctor model.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Doctor {

  @Id
  private Long id;

  private String code;

  @OneToOne(cascade = CascadeType.ALL)
  private PersonalData personalData;

  @OneToOne(cascade = CascadeType.ALL)
  private Office office;

  @OneToOne(cascade = CascadeType.ALL)
  private CreditCard creditCard;

  @OneToMany(mappedBy = "doctor", cascade = {CascadeType.REFRESH, CascadeType.PERSIST,CascadeType.MERGE}, fetch = FetchType.LAZY)
  private List<Appointment> appointments;
}
