// @flow
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setDoctorOfficeData } from '../redux/actions';
import { getUserId } from '../redux/selectors';
import { BASE_URL, SAVE_OFFICE_INFORMATION_URL } from './endpoints';
import { PAGES_FULL_ROUTES } from '../routing/pages';

export const useSaveOfficeData = (): Function => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);

  const saveOfficeData = (values: Object, shouldRedirectByDefault: boolean) => {
    axios
      .post(`${BASE_URL}${SAVE_OFFICE_INFORMATION_URL}`, values, {
        params: {
          doctorId: userId,
        },
      })
      .then((response: Object) => {
        dispatch(setDoctorOfficeData(response?.data));

        if (shouldRedirectByDefault) {
          history.push(PAGES_FULL_ROUTES.REGISTER_DOCTOR_CREDIT_CARD);
        }
      });
  };

  return saveOfficeData;
};
