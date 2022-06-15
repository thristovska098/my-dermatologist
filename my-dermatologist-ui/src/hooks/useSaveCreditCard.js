// @flow

// Hooks
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Utils
import axios from 'axios';
import { BASE_URL, SAVE_DOCTOR_CREDIT_CARD_DATA_URL } from './endpoints';
import { PAGES_FULL_ROUTES } from '../routing/pages';
import { getUserId } from '../redux/selectors';

export const useSaveCreditCard = (): Function => {
  const history = useHistory();
  const userId = useSelector(getUserId);

  const params = {
    doctorId: userId,
  };

  const saveCreditCard = (values: Object) => {
    axios
      .post(`${BASE_URL}${SAVE_DOCTOR_CREDIT_CARD_DATA_URL}`, values, {
        params,
      })
      .then(() => {
        history.push(PAGES_FULL_ROUTES.DOCTOR_HOME_PAGE);
      });
  };

  return saveCreditCard;
};
