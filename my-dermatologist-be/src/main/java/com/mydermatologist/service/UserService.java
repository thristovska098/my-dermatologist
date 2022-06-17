package com.mydermatologist.service;

import com.mydermatologist.domain.UserApp;
import com.mydermatologist.dto.UserLoginDto;
import com.mydermatologist.dto.UserResponseDto;
import com.mydermatologist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  /**
   * Create user or verify that exists with username.
   *
   * @param userApp the user information.
   * @param isSignUp flag for showing if it's sign in or sign up service.
   * @return the {@link UserApp}.
   */
  public UserApp checkUsername(UserLoginDto userApp, boolean isSignUp) {

    UserApp user = userRepository.findByUsername(userApp.getUsername())
      .stream().findFirst().orElse(null);

    if (user != null && isSignUp) {
      throw new RuntimeException("User with username " + userApp.getUsername() + " already exists.");
    } else if(user == null && !isSignUp){
      throw new RuntimeException("User with username " + userApp.getUsername() + " doesn't exists.");
    }
      else if (user != null) {
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
   * @param user the user information.
   * @param userId the user information.
   * @return the {@link UserResponseDto}.
   */
  public UserResponseDto checkPassword(UserLoginDto user, Long userId) {
    UserResponseDto userResponseDto = new UserResponseDto();

    UserApp foundUserApp = userRepository.findById(userId).orElseThrow(()-> new RuntimeException("Invalid user id."));

    userResponseDto.setUserType(foundUserApp.getUserType());
    String password = foundUserApp.getPassword();

    if(password == null){
      foundUserApp.setPassword(user.getPassword());
      userRepository.save(foundUserApp);

      userResponseDto.setUserLoggedIn(true);
      return userResponseDto;
    }

    if(user.getPassword().equals(password)){
       throw new RuntimeException("Invalid password.");
    }

    userResponseDto.setUserLoggedIn(user.getPassword().equals(password));

    return userResponseDto;
  }
}