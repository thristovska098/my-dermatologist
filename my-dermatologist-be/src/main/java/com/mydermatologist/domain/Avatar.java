package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Client image model.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Avatar implements  java.io.Serializable {

  @Id
  @GeneratedValue
  private Integer avatarId;

  @NonNull
  private byte[] image;
}
