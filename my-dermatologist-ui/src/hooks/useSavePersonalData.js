// @flow
import axios from 'axios';

// Hooks
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Utils
import { BASE_URL, SAVE_DOCTOR_PERSONAL_DATA_URL, SAVE_PATIENT_PERSONAL_DATA_URL } from './endpoints';
import { PAGES_FULL_ROUTES } from '../routing/pages';
import { USER_TYPE } from '../ui/constants';
import { getUserId, getUserType } from '../redux/selectors';

export const useSavePersonalData = (): Function => {
  const history = useHistory();
  const userType = useSelector(getUserType);
  const userId = useSelector(getUserId);

  const isPatient = userType.toLowerCase() === USER_TYPE.PATIENT;

  const savePersonalDataUrl = isPatient ? SAVE_PATIENT_PERSONAL_DATA_URL : SAVE_DOCTOR_PERSONAL_DATA_URL;

  const redirectUrl = isPatient
    ? PAGES_FULL_ROUTES.PATIENT_HOME_PAGE
    : PAGES_FULL_ROUTES.REGISTER_DOCTOR_PROFESSIONAL_DATA;

  const saveUser = (values: Object) => {
    const { personalData } = values;
    const { dateOfBirth, ...rest } = personalData;

    axios
      .post(
        `${BASE_URL}${savePersonalDataUrl}`,
        {
          personalData: { dateOfBirth: dateOfBirth.toDate(), ...rest },
        },
        {
          params: {
            userId,
          },
        },
      )
      .then(() => {
        history.push(redirectUrl);
      });
  };

  return saveUser;
};
