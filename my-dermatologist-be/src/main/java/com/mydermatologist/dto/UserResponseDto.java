package com.mydermatologist.dto;

import com.mydermatologist.domain.UserType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Dto that represents the model that is response when the user logins.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDto {
  private boolean isUserLoggedIn;

  private UserType userType;
}
