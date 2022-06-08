// @flow
import axios from 'axios';

// Hooks
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Utils
import { BASE_URL, SAVE_DOCTOR_PERSONAL_DATA_URL, SAVE_PATIENT_PERSONAL_DATA_URL } from './endpoints';
import { setUserId } from '../redux/actions';
import { PAGES_FULL_ROUTES } from '../routing/pages';
import { USER_TYPE } from '../ui/constants';

export const useSavePersonalData = (userType: string): Function => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isPatient = userType === USER_TYPE.PATIENT;

  const savePersonalDataUrl = isPatient ? SAVE_PATIENT_PERSONAL_DATA_URL : SAVE_DOCTOR_PERSONAL_DATA_URL;

  const redirectUrl = isPatient
    ? PAGES_FULL_ROUTES.REGISTER_PATIENT_CREDIT_CARD
    : PAGES_FULL_ROUTES.REGISTER_DOCTOR_PROFESSIONAL_DATA;

  const savePatient = (values: Object) => {
    const { personalData } = values;
    const { dateOfBirth, ...rest } = personalData;

    axios
      .post(`${BASE_URL}${savePersonalDataUrl}`, {
        personalData: { dateOfBirth: dateOfBirth.toDate(), ...rest },
      })
      .then((response: Object) => {
        const userId = isPatient ? response?.data?.code : response?.data?.id;

        dispatch(setUserId(userId));
        history.push(redirectUrl);
      });
  };

  return savePatient;
};
