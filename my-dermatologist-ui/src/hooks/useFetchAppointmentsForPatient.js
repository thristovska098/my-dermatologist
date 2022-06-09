// @flow

// Hooks
import { useSelector } from 'react-redux';

// Utils
import axios from 'axios';
import { BASE_URL, FETCH_APPOINTMENTS_FOR_PATIENT_URL } from './endpoints';
import { getUserId } from '../redux/selectors';

export const useFetchAppointmentsForPatient = (): Promise => {
  const userId = useSelector(getUserId);

  const params = {
    patientId: userId,
  };

  const promise = new Promise((resolve: Function, reject: Function) => {
    axios
      .get(`${BASE_URL}${FETCH_APPOINTMENTS_FOR_PATIENT_URL}`, {
        params,
      })
      .then((response) => resolve(response))
      .catch((error: any) => {
        reject(error);
      });
  });

  return promise;
};
