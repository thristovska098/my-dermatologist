package com.mydermatologist.domain;

/**
 * User type enumeration.
 */
public enum UserType {
  DOCTOR("doctor"),
  PATIENT("patient");

  private String userType;

  UserType(String userType) {
    this.userType = userType;
  }
}
