// @flow

// Hooks
import { useDispatch } from 'react-redux';

// Utils
import axios from 'axios';
import { BASE_URL, SAVE_IMAGES } from './endpoints';
import { setIsPaymentModalOpen } from '../redux/actions';

export const useSaveImagesToAppointment = (): Function => {
  const dispatch = useDispatch();

  const saveImages = (files: Array<any>, appointmentId: number) => {
    const formData = new FormData();

    formData.append('files', files[0]);
    formData.append('files', files[1]);

    axios
      .post(`${BASE_URL}${SAVE_IMAGES}`, formData, {
        params: {
          appointmentId,
        },
      })
      .then((response: Object) => {
        console.log(response);
        dispatch(setIsPaymentModalOpen(true));
      });
  };

  return saveImages;
};
