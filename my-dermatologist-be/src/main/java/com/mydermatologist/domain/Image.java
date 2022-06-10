package com.mydermatologist.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

/**
 * Client file - image model.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Image implements  java.io.Serializable {

  @Id
  @GeneratedValue
  private Long id;

  private String name;

  private String type;

  @Lob
  private byte [] data;
}
