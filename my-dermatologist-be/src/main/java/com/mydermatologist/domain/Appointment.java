package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.Date;
import java.util.List;

/**
 * Appointment model.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {

  @Id
  @GeneratedValue
  private String id;

  private String title;

  private String description;

  private Date createdOn;

  private AppointmentStatus appointmentStatus;

  private String medicalDiagnosis;

  private String medicalPrescription;

  private String treatment;

  @OneToMany(cascade = CascadeType.ALL)
  @JoinColumn
  private List<Avatar> images;

  @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.PERSIST,CascadeType.MERGE}, fetch = FetchType.EAGER)
  @JoinColumn
  private  Doctor doctor;

  @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.PERSIST,CascadeType.MERGE}, fetch = FetchType.EAGER)
  @JoinColumn
  private Patient patient;

}
