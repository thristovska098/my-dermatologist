// @flow
import axios from 'axios';
import { APPOINTMENT_URL, BASE_URL } from './endpoints';

export const useDeleteAppointment = (): Function => {
  const deleteAppointment = (appointmentId: number) => {
    axios.delete(`${BASE_URL}${APPOINTMENT_URL}`, {
      params: {
        appointmentId,
      },
    });
  };

  return deleteAppointment;
};
