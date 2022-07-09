// @flow
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL, SAVE_DOCTOR_CREDIT_CARD_DATA_URL } from './endpoints';
import { getUserId } from '../redux/selectors';
import { setDoctorCreditCardData } from '../redux/actions';

export const useSaveCreditCard = (): Function => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);

  const params = {
    doctorId: userId,
  };

  const saveCreditCard = (values: Object) => {
    axios
      .post(`${BASE_URL}${SAVE_DOCTOR_CREDIT_CARD_DATA_URL}`, values, {
        params,
      })
      .then((response: Object) => {
        dispatch(setDoctorCreditCardData(response?.data));
      });
  };

  return saveCreditCard;
};
