package com.mydermatologist.controller.user;

import com.mydermatologist.dto.UserLoginDto;
import com.mydermatologist.dto.UserResponseDto;

/**
 * User REST controller interface.
 */
public interface UserController {

  /**
   * Create user or verify that exists with username.
   *
   * @param userAppSignUpDto the user information.
   * @param isSignUp flag for showing if it's sign in or sign up service.
   * @return the {@link Long}.
   */
  Long checkUsername(UserLoginDto userAppSignUpDto, boolean isSignUp);

  /**
   * Save users password or verify the existing password.
   *
   * @param userSignInDto the user information.
   * @param userId the user's id.
   * @return the {@link UserResponseDto}.
   */
  UserResponseDto checkPassword(Long userId, UserLoginDto userSignInDto);
}
