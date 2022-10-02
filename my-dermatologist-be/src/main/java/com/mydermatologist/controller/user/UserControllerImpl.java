package com.mydermatologist.controller.user;

import com.mydermatologist.dto.UserLoginDto;
import com.mydermatologist.dto.UserResponseDto;
import com.mydermatologist.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import static com.mydermatologist.controller.RestControllerConstants.LOGIN_USER_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.REGISTER_USER_ENDPOINT;

/**
 * User REST controller implementation.
 */
@RestController
@RequiredArgsConstructor
public class UserControllerImpl implements UserController {

  private final UserService userService;

  /**
   * Register user with valid username and password.
   *
   * @param userAppSignUpDto the user information.
   * @return the {@link Long}.
   */
  @Override
  @PostMapping(value = REGISTER_USER_ENDPOINT)
  public UserResponseDto registerUser(@RequestBody UserLoginDto userAppSignUpDto) {

    return userService.registerUser(userAppSignUpDto);
  }

  /**
   * Logs in user with valid username and password.
   *
   * @param userSignInDto the user information.
   * @return the {@link UserResponseDto}.
   */
  @Override
  @PostMapping(value = LOGIN_USER_ENDPOINT)
  public UserResponseDto logInUser(@RequestBody UserLoginDto userSignInDto) {

    return userService.logInUser(userSignInDto);
  }
}
