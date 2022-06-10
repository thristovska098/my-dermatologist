// @flow

// Hooks
import { useDispatch } from 'react-redux';

// Utils
import axios from 'axios';
import { BASE_URL, SAVE_IMAGES } from './endpoints';
import { setIsPaymentModalOpen } from '../redux/actions';

export const useSaveImagesToAppointment = (): Function => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const convertFileToFormDataObject = (files: Array): Object => {
    const formData = new FormData();

    files?.forEach((image, index): Object => {
      formData.append(`image[${index}]`, image, image?.name);
    });

    return formData;
  };

  const headers = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  };
  const saveImages = (values: Array<any>, appointmentId: number) => {
    console.log('Values', values);
    const formData = new FormData();
    formData.append('files', values[0], values[0]?.name);
    console.log('Images', formData);
    axios
      .post(`${BASE_URL}${SAVE_IMAGES}`, formData, {
        params: {
          appointmentId,
        },
        headers,
      })
      .then((response) => {
        console.log(response);
        dispatch(setIsPaymentModalOpen(true));
      });
  };

  return saveImages;
};
