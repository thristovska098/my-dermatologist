package com.mydermatologist.controller.user;

import com.mydermatologist.domain.UserApp;
import com.mydermatologist.dto.UserLoginDto;
import com.mydermatologist.dto.UserResponseDto;
import com.mydermatologist.service.user.UserService;
import com.mydermatologist.service.user.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.mydermatologist.controller.RestControllerConstants.CHECK_PASSWORD_ENDPOINT;
import static com.mydermatologist.controller.RestControllerConstants.CHECK_USERNAME_ENDPOINT;

/**
 * User REST controller implementation.
 */
@RestController
public class UserControllerImpl implements UserController {

  private final UserService userService;

  @Autowired
  public UserControllerImpl(UserServiceImpl userService) {
    this.userService = userService;
  }


  /**
   * Create user or verify that exists with username.
   *
   * @param userAppSignUpDto the user information.
   * @param isSignUp flag for showing if it's sign in or sign up service.
   * @return the {@link Long}.
   */
  @RequestMapping(value = CHECK_USERNAME_ENDPOINT, method = RequestMethod.POST)
  public Long checkUsername(@RequestBody UserLoginDto userAppSignUpDto, @RequestParam boolean isSignUp) {

    UserApp userApp = userService.checkUsername(userAppSignUpDto, isSignUp);

    return userApp.getId();
  }

  /**
   * Save users password or verify the existing password.
   *
   * @param userSignInDto the user information.
   * @param userId the user's id.
   * @return the {@link UserResponseDto}.
   */
  @RequestMapping(value = CHECK_PASSWORD_ENDPOINT, method = RequestMethod.POST)
  public UserResponseDto checkPassword(@RequestParam Long userId, @RequestBody UserLoginDto userSignInDto) {

    UserResponseDto userResponseDto = userService.checkPassword(userSignInDto, userId);

    return userResponseDto;
  }
}
