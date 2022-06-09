// @flow

// Utils
import axios from 'axios';
import { BASE_URL, FETCH_DOCTORS_URL } from './endpoints';

export const useFetchDoctors = (): Promise => {
  const promise = new Promise((resolve: Function, reject: Function) => {
    axios
      .get(`${BASE_URL}${FETCH_DOCTORS_URL}`)
      .then((response: Object) => {
        console.log(response);
        resolve(response);
      })
      .catch((error: Object) => {
        reject(error);
      });
  });

  return promise;
};
