package com.mydermatologist.repository;

import com.mydermatologist.domain.CreditCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * CreditCard repository.
 */
@Repository
public interface CreditCardRepository  extends JpaRepository<CreditCard, String> {
}
