package com.mydermatologist.domain;

/**
 * Appointment status enumeration.
 */
public enum AppointmentStatus {
  COMPLETED("completed"),
  WAITING("waiting");

  private String appointmentStatus;

  AppointmentStatus(String appointmentStatus){
    this.appointmentStatus = appointmentStatus;
  }
}
