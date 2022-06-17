// @flow

// Hooks
import { useSelector } from 'react-redux';

// Utils
import axios from 'axios';
import { BASE_URL, FETCH_APPOINTMENTS_FOR_DOCTOR_URL, FETCH_APPOINTMENTS_FOR_PATIENT_URL } from './endpoints';
import { getUserId, getUserType } from '../redux/selectors';
import { USER_TYPE } from '../ui/constants';

export const useFetchAppointments = (): Promise<Object> => {
  const userId = useSelector(getUserId);
  const userType = useSelector(getUserType);
  const isPatient = userType.toLowerCase() === USER_TYPE.PATIENT;

  const params = isPatient
    ? {
        patientId: userId,
      }
    : {
        doctorId: userId,
      };

  const fetchAppointmentsUrl = isPatient ? FETCH_APPOINTMENTS_FOR_PATIENT_URL : FETCH_APPOINTMENTS_FOR_DOCTOR_URL;

  const promise = new Promise((resolve: Function, reject: Function) => {
    axios
      .get(`${BASE_URL}${fetchAppointmentsUrl}`, {
        params,
      })
      .then((response) => resolve(response))
      .catch((error: any) => {
        reject(error);
      });
  });

  return promise;
};
