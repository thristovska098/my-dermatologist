package com.mydermatologist.controller;

import com.mydermatologist.domain.UserApp;
import com.mydermatologist.dto.UserSignInDto;
import com.mydermatologist.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import static com.mydermatologist.controller.RestControllerConstants.SIGN_IN_USER_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.SIGN_UP_USER_ENDPOINT;

/**
 * User REST controller.
 */
@RestController
@RequiredArgsConstructor
public class UserController {

  private final UserService userService;


  /**
   * Sign up user.
   *
   * @param userAppSignUpDto the user information.
   * @return the {@link Long}.
   */
  @RequestMapping(
    value = SIGN_UP_USER_ENDPOINT,
    method = RequestMethod.POST)
  public Long signUpUser(
    @RequestBody UserApp userAppSignUpDto) {

    UserApp userApp = userService.signUpUser(userAppSignUpDto);

    return userApp.getId();
  }

  /**
   * Sign in user.
   *
   * @param userSignInDto the user information.
   * @return the {@link Long}.
   */
  @RequestMapping(
    value = SIGN_IN_USER_ENDPOINT,
    method = RequestMethod.POST)
  public Long signInUser(
    @RequestBody UserSignInDto userSignInDto) {

    Long userId = userService.signInUser(userSignInDto);

    return userId;
  }
}
