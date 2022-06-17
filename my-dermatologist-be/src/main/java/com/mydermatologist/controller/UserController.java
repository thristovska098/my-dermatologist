package com.mydermatologist.controller;

import com.mydermatologist.domain.UserApp;
import com.mydermatologist.dto.UserSignInDto;
import com.mydermatologist.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.mydermatologist.controller.RestControllerConstants.CHECK_PASSWORD_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.CHECK_USERNAME_ENDPOINT;

/**
 * User REST controller.
 */
@RestController
@RequiredArgsConstructor
public class UserController {

  private final UserService userService;


  /**
   * Create user or verify that exists with username.
   *
   * @param userAppSignUpDto the user information.
   * @param isSignUp flag for showing if it's sign in or sign up service.
   * @return the {@link Long}.
   */
  @RequestMapping(
    value = CHECK_USERNAME_ENDPOINT,
    method = RequestMethod.POST)
  public Long checkUsername(
    @RequestBody UserSignInDto userAppSignUpDto, @RequestParam boolean isSignUp) {

    UserApp userApp = userService.checkUsername(userAppSignUpDto, isSignUp);

    return userApp.getId();
  }

  /**
   * Save users password or verify the existing password.
   *
   * @param userSignInDto the user information.
   * @param userId the users id.
   * @return the {@link boolean}.
   */
  @RequestMapping(
    value =  CHECK_PASSWORD_ENDPOINT,
    method = RequestMethod.POST)
  public boolean checkPassword(@RequestParam Long userId,
    @RequestBody UserSignInDto userSignInDto) {

    boolean isUserLoggedIn = userService.checkPassword(userSignInDto, userId);

    return isUserLoggedIn;
  }
}
