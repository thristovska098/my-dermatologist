package com.mydermatologist.domain;

/**
 * Gender type enumeration.
 */
public enum Gender {
  MALE("male"),
  FEMALE("female"),
  OTHER("other");

  private String gender;

  Gender(String gender) {
    this.gender = gender;
  }
}
