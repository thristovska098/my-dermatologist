package com.mydermatologist.repository;

import com.mydermatologist.domain.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Doctor repository.
 */
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, String> {
}
