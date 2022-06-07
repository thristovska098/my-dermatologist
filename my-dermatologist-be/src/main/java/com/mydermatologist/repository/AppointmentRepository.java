package com.mydermatologist.repository;

import com.mydermatologist.domain.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Appointment repository.
 */
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
