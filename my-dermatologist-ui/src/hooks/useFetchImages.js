// @flow

// Utils
import axios from 'axios';
import { BASE_URL, FETCH_IMAGES_URL } from './endpoints';

export const useFetchImages = (): Function => {
  const fetchImages = (appointmentId: number): Promise => {
    const promise = new Promise((resolve: Function, reject: Function) => {
      axios
        .get(`${BASE_URL}${FETCH_IMAGES_URL}`, {
          params: {
            appointmentId,
          },
        })
        .then((response: Object) => {
          resolve(response);
        })
        .catch((error: Object) => {
          reject(error);
        });
    });

    return promise;
  };

  return fetchImages;
};
