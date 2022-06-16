package com.mydermatologist.service;

import com.mydermatologist.domain.UserApp;
import com.mydermatologist.dto.UserSignInDto;
import com.mydermatologist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  /**
   * Sign up user.
   *
   * @param userApp the user information.
   * @return the {@link UserApp}.
   */
  public UserApp signUpUser(UserApp userApp) {

    UserApp foundUserApp = userRepository.findByUsername(userApp.getUsername())
      .stream().findFirst().orElse(null);

    if (foundUserApp != null) {
      throw new RuntimeException("The user with username " + userApp.getUsername() + " already exists");
    }

    userRepository.save(userApp);

    return userApp;
  }

  /**
   * Sign in user.
   *
   * @param user the user information.
   * @return the {@link Long}.
   */
  public Long signInUser(UserSignInDto user) {

    UserApp foundUserApp = userRepository.findByUsername(user.getUsername())
      .stream().findFirst()
      .orElseThrow(()-> new RuntimeException("The user with username "+ user.getUsername()+" doesn't exist"));

    String password = foundUserApp.getPassword();

    if(user.getPassword().equals(password)){
      return foundUserApp.getId();
    }
    else {
      throw new RuntimeException("Incorrect password");
    }
  }
}