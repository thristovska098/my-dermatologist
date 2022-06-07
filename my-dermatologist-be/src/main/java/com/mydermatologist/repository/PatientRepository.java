package com.mydermatologist.repository;

import com.mydermatologist.domain.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Patient repository.
 */
@Repository
public interface PatientRepository  extends JpaRepository<Patient, Long> {
}
