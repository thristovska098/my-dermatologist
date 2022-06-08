// @flow

// Hooks
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Utils
import axios from 'axios';
import { USER_TYPE } from '../ui/constants';
import { BASE_URL, SAVE_DOCTOR_CREDIT_CARD_DATA_URL, SAVE_PATIENT_CREDIT_CARD_DATA_URL } from './endpoints';
import { PAGES_FULL_ROUTES } from '../routing/pages';
import { getUserId } from '../redux/selectors';

export const useSaveCreditCard = (userType: string): Function => {
  const history = useHistory();
  const userId = useSelector(getUserId);

  const isPatient = userType === USER_TYPE.PATIENT;

  const saveCreditCardDataUrl = isPatient ? SAVE_PATIENT_CREDIT_CARD_DATA_URL : SAVE_DOCTOR_CREDIT_CARD_DATA_URL;

  const params = isPatient
    ? {
        patientId: userId,
      }
    : {
        doctorId: userId,
      };

  const redirectUrl = isPatient ? PAGES_FULL_ROUTES.PATIENT_HOME_PAGE : PAGES_FULL_ROUTES.DOCTOR_HOME_PAGE;

  const saveCreditCard = (values: Object) => {
    axios
      .post(`${BASE_URL}${saveCreditCardDataUrl}`, values, {
        params,
      })
      .then(() => {
        history.push(redirectUrl);
      });
  };

  return saveCreditCard;
};
