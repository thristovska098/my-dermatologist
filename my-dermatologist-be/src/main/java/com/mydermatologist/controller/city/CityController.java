package com.mydermatologist.controller.city;

import java.util.List;

/**
 * City REST controller interface.
 */
public interface CityController {

  /**
   * Returns all available cities.
   *
   * @return the {@link List<String>}.
   */
  List<String> getCities();
}
