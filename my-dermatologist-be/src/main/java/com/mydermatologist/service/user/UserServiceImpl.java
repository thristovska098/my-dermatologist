package com.mydermatologist.service.user;

import com.mydermatologist.domain.UserApp;
import com.mydermatologist.dto.UserLoginDto;
import com.mydermatologist.dto.UserResponseDto;
import com.mydermatologist.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * User service implementation.
 */
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

  /**
   * Register user with valid username and password.
   *
   * @param userAppSignUpDto the user information.
   * @return the {@link Long}.
   */
  @Override
  public UserResponseDto registerUser(UserLoginDto userAppSignUpDto) {

    UserApp user = checkUsername(userAppSignUpDto, true);

    UserResponseDto userResponseDto = checkPassword(userAppSignUpDto, user);

    return userResponseDto;
  }

  /**
   * Logs in user with valid username and password.
   *
   * @param userSignInDto the user information.
   * @return the {@link UserResponseDto}.
   */
  @Override
  public UserResponseDto logInUser(UserLoginDto userSignInDto) {

    UserApp user = checkUsername(userSignInDto, false);

    UserResponseDto userResponseDto = checkPassword(userSignInDto, user);

    return userResponseDto;
  }

  private final UserRepository userRepository;

  /**
   * Create user or verify that exists with username.
   *
   * @param userApp the user information.
   * @param isSignUp flag for showing if it's sign in or sign up service.
   * @return the {@link UserApp}.
   */
  private UserApp checkUsername(UserLoginDto userApp, boolean isSignUp) {

    UserApp user = userRepository.findByUsername(userApp.getUsername()).stream().findFirst().orElse(null);

    if (user != null && isSignUp) {
      throw new RuntimeException("User with username " + userApp.getUsername() + " already exists.");
    } else if (user == null && !isSignUp) {
      throw new RuntimeException("User with username " + userApp.getUsername() + " doesn't exists.");
    } else if (user != null) {
      return user;
    }

    user = new UserApp();
    user.setUsername(userApp.getUsername());
    user.setUserType(userApp.getUserType());

    userRepository.save(user);

    return user;
  }

  /**
   * Save users password or verify the existing password.
   *
   * @param userDto the user information.
   * @param userApp the user information.
   * @return the {@link UserResponseDto}.
   */
  private UserResponseDto checkPassword(UserLoginDto userDto, UserApp userApp) {

    UserResponseDto userResponseDto = new UserResponseDto();

    userResponseDto.setUserType(userApp.getUserType());
    String password = userApp.getPassword();

    if (password == null) {
      userApp.setPassword(userDto.getPassword());
      userRepository.save(userApp);

      userResponseDto.setUserLoggedIn(true);
      return userResponseDto;
    }

    if (!userDto.getPassword().equals(password)) {
      throw new RuntimeException("Invalid password.");
    }

    userResponseDto.setUserLoggedIn(userDto.getPassword().equals(password));

    return userResponseDto;
  }
}