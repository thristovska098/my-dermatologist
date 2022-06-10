package com.mydermatologist.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
  private Long id;

  private String title;

  private String description;

  private Date createdOn;

  private AppointmentStatus appointmentStatus;

  private String medicalDiagnosis;

  private String medicalPrescription;

  private String treatment;

  @OneToMany(cascade = CascadeType.ALL)
  @JoinColumn
  private List<Image> images;

  @JsonIgnore
  @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.PERSIST,CascadeType.MERGE}, fetch = FetchType.EAGER)
  @JoinColumn
  private  Doctor doctor;

  @JsonIgnore
  @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.PERSIST,CascadeType.MERGE}, fetch = FetchType.EAGER)
  @JoinColumn
  private Patient patient;

}
