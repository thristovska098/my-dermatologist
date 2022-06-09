// @flow

// Hooks
import { useDispatch } from 'react-redux';

// Utils
import axios from 'axios';
import { BASE_URL, FETCH_CITIES_URL } from './endpoints';
import { setCities } from '../redux/actions';

export const useFetchCities = () => {
  const dispatch = useDispatch();

  axios.get(`${BASE_URL}${FETCH_CITIES_URL}`).then((response: Object) => {
    dispatch(setCities(response?.data));
  });
};
