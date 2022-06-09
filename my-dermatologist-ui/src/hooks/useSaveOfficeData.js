// @flow

// Hooks
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Utils
import axios from 'axios';
import { getUserId } from '../redux/selectors';

// Constants
import { BASE_URL, SAVE_OFFICE_INFORMATION_URL } from './endpoints';
import { PAGES_FULL_ROUTES } from '../routing/pages';

export const useSaveOfficeData = (): Function => {
  const history = useHistory();
  const userId = useSelector(getUserId);

  const saveOfficeData = (values: Object) => {
    axios
      .post(`${BASE_URL}${SAVE_OFFICE_INFORMATION_URL}`, values, {
        params: {
          doctorId: userId,
        },
      })
      .then(() => {
        history.push(PAGES_FULL_ROUTES.REGISTER_DOCTOR_CREDIT_CARD);
      });
  };

  return saveOfficeData;
};
