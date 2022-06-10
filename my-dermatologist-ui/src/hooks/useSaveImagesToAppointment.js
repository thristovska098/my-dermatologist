// @flow

// Hooks
import { useDispatch } from 'react-redux';

// Utils
import axios from 'axios';
import { BASE_URL, SAVE_IMAGES } from './endpoints';
import { setIsPaymentModalOpen } from '../redux/actions';

export const useSaveImagesToAppointment = (): Function => {
  const dispatch = useDispatch();

  const prepareFormData = (files: Array<Object>): any => {
    const formData = new FormData();

    files.forEach((file) => formData.append('files', file));

    return formData;
  };

  const saveImages = (files: Array<any>, appointmentId: number) => {
    const preparedFormData = prepareFormData(files);

    axios
      .post(`${BASE_URL}${SAVE_IMAGES}`, preparedFormData, {
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
