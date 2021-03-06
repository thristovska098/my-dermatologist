package com.mydermatologist.controller.city;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

import static com.mydermatologist.controller.RestControllerConstants.FETCH_CITIES_ENDPOINT;

/**
 * City REST controller implementation.
 */
@RestController
public class CityControllerImpl implements CityController {

  private final List<String> cities = Arrays.asList(
    "Berovo",
    "Bitola",
    "Bogdanci",
    "Valandovo",
    "Veles",
    "Vinica",
    "Gevgelija",
    "Gostivar",
    "Debar",
    "Delcevo",
    "Demir Kapija",
    "Demir Hisar",
    "Kavadarci",
    "Kicevo",
    "Kochani",
    "Kratovo",
    "Kriva Palanka",
    "Krushevo",
    "Kumanovo",
    "Makedonski Brod",
    "Makedonska Kamenica",
    "Negotino",
    "Ohrid",
    "Pehchevo",
    "Prilep",
    "Probishtip",
    "Radovish",
    "Resen",
    "Sveti Nikole",
    "Skopje",
    "Struga",
    "Strumica",
    "Tetovo",
    "Shtip");

  /**
   * Returns all available cities.
   *
   * @return the {@link List<String>}.
   */
  @RequestMapping(
    value = FETCH_CITIES_ENDPOINT,
    method = RequestMethod.GET)
  public List<String> getCities() {

    return cities;
  }
}

