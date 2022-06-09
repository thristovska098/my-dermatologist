// @flow

// Hooks
import { useDispatch, useSelector } from 'react-redux';

// Utils
import axios from 'axios';
import { BASE_URL, CREATE_APPOINTMENT_URL } from './endpoints';
import { getUserId } from '../redux/selectors';
import { setIsPaymentModalOpen } from '../redux/actions';

export const useCreateAppointment = (): Function => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);

  const params = {
    patientId: userId,
  };

  const createAppointment = (values: Object) => {
    const { images, ...formData } = values;
    console.log(images);
    // TODO: handle the saving of the images
    axios
      .post(`${BASE_URL}${CREATE_APPOINTMENT_URL}`, formData, {
        params,
      })
      .then(() => {
        dispatch(setIsPaymentModalOpen(true));
      });
  };

  return createAppointment;
};
