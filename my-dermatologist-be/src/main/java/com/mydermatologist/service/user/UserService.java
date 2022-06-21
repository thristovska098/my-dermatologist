package com.mydermatologist.service.user;

import com.mydermatologist.domain.UserApp;
import com.mydermatologist.dto.UserLoginDto;
import com.mydermatologist.dto.UserResponseDto;

/**
 * User service interface.
 */
public interface UserService {

  /**
   * Create user or verify that exists with username.
   *
   * @param userApp the user information.
   * @param isSignUp flag for showing if it's sign in or sign up service.
   * @return the {@link UserApp}.
   */
  UserApp checkUsername(UserLoginDto userApp, boolean isSignUp);


  /**
   * Save users password or verify the existing password.
   *
   * @param user the user information.
   * @param userId the user information.
   * @return the {@link UserResponseDto}.
   */
  UserResponseDto checkPassword(UserLoginDto user, Long userId);
}
