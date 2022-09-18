package com.mydermatologist.service.user;

import com.mydermatologist.domain.UserApp;
import com.mydermatologist.dto.UserLoginDto;
import com.mydermatologist.dto.UserResponseDto;

/**
 * User service interface.
 */
public interface UserService {

  /**
   * Register user with valid username and password.
   *
   * @param userAppSignUpDto the user information.
   * @return the {@link Long}.
   */
  UserResponseDto registerUser(UserLoginDto userAppSignUpDto);

  /**
   * Logs in user with valid username and password.
   *
   * @param userSignInDto the user information.
   * @return the {@link UserResponseDto}.
   */
  UserResponseDto logInUser(UserLoginDto userSignInDto);
}
