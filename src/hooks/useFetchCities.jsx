// @flow

// Utils
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCountries } from '../redux/actions';

const prepareData = (cities: Array<Object>): Array<Object> => {
  // TODO: Ask the professor should I use this API? Because sometimes is not available.
  const preparedCities = cities.find((countryObj) => countryObj.country === 'Macedonia')?.cities;

  return preparedCities;
};

export const useFetchCities = () => {
  const dispatch = useDispatch();

  axios
    .get('https://countriesnow.space/api/v0.1/countries', {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
    })
    .then((response) => {
      const prepareCities = prepareData(response.data.data);
      dispatch(setCountries(prepareCities));
    });
};
