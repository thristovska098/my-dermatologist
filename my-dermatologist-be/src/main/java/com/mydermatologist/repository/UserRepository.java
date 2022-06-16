package com.mydermatologist.repository;

import com.mydermatologist.domain.UserApp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * User repository.
 */
@Repository
public interface UserRepository extends JpaRepository<UserApp, Long> {
  List<UserApp> findByUsername(String username);
}
