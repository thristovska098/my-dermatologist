// @flow

// Hooks
import { useSelector } from 'react-redux';

// Utils
import axios from 'axios';
import { BASE_URL, CREATE_APPOINTMENT_URL } from './endpoints';
import { getUserId } from '../redux/selectors';

export const useCreateAppointment = (): Function => {
  const userId = useSelector(getUserId);

  const params = {
    patientId: userId,
  };

  const createAppointment = (values: Object): Promise => {
    const promise = new Promise((resolve: Function, reject: Function) => {
      axios
        .post(`${BASE_URL}${CREATE_APPOINTMENT_URL}`, values, {
          params,
        })
        .then((response: Object) => {
          resolve(response);
        })
        .catch((error) => reject(error));
    });

    return promise;
  };

  return createAppointment;
};
