// @flow
import axios from 'axios';

// Hooks
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Utils
import { BASE_URL, SAVE_PATIENT_PERSONAL_DATA_URL } from './endpoints';
import { setUserId } from '../redux/actions';
import { PAGES_FULL_ROUTES } from '../routing/pages';

export const useSavePersonalDataForPatient = (): Function => {
  const dispatch = useDispatch();
  const history = useHistory();

  const savePatient = (values: Object) => {
    const { personalData } = values;
    const { dateOfBirth, ...rest } = personalData;

    axios
      .post(`${BASE_URL}${SAVE_PATIENT_PERSONAL_DATA_URL}`, {
        personalData: { dateOfBirth: dateOfBirth.toDate(), ...rest },
      })
      .then((response: Object) => {
        dispatch(setUserId(response?.data?.code));
        history.push(PAGES_FULL_ROUTES.REGISTER_PATIENT_CREDIT_CARD);
      });
  };

  return savePatient;
};
