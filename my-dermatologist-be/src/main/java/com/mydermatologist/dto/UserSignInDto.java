package com.mydermatologist.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Dto that represents the model user sing in.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserSignInDto {

  private String password;

  private String username;
}
