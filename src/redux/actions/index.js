export const SET_CITIES = 'MY_DERMATOLOGIST@CONFIG.SET_CITIES';

export function setCountries(cities) {
  return {
    type: SET_CITIES,
    cities,
  };
}
