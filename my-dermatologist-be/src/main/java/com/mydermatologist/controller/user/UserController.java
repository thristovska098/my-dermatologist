package com.mydermatologist.controller.user;

import com.mydermatologist.dto.UserLoginDto;
import com.mydermatologist.dto.UserResponseDto;

/**
 * User REST controller interface.
 */
public interface UserController {

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
