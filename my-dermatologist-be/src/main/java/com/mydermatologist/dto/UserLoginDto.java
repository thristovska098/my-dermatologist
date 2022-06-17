package com.mydermatologist.dto;

import com.mydermatologist.domain.UserType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Dto that represents the model for user sign in/sign up.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserLoginDto {

  private String password;

  private String username;

  private UserType userType;
}
