package com.mydermatologist.infrastructure.exception.controllerAdvice;

import com.mydermatologist.infrastructure.exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * EntityNotFoundAdvice handles all the exceptions in the application.
 */
@ControllerAdvice
public class EntityNotFoundAdvice extends ResponseEntityExceptionHandler {

  @ExceptionHandler(value = Exception.class)
  public final ResponseEntity<String> handleAllException() {

    return new ResponseEntity<>("Bad request.", HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(value = NotFoundException.class)
  public final ResponseEntity<String> handleNotFoundException() {

    return new ResponseEntity<>("The entity was not found.", HttpStatus.NOT_FOUND);
  }
}
