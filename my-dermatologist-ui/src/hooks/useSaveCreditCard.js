// @flow
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BASE_URL, SAVE_DOCTOR_CREDIT_CARD_DATA_URL } from './endpoints';
import { PAGES_FULL_ROUTES } from '../routing/pages';
import { getUserId } from '../redux/selectors';
import { setDoctorCreditCardData } from '../redux/actions';

export const useSaveCreditCard = (): Function => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);

  const params = {
    doctorId: userId,
  };

  const saveCreditCard = (values: Object, shouldRedirectByDefault: boolean) => {
    axios
      .post(`${BASE_URL}${SAVE_DOCTOR_CREDIT_CARD_DATA_URL}`, values, {
        params,
      })
      .then((response: Object) => {
        dispatch(setDoctorCreditCardData(response?.data));

        if (shouldRedirectByDefault) {
          history.push(PAGES_FULL_ROUTES.DOCTOR_HOME_PAGE);
        }
      });
  };

  return saveCreditCard;
};
