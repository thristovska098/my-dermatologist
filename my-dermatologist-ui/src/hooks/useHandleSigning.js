// @flow
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BASE_URL, LOGIN_USER_ENDPOINT, REGISTER_USER_ENDPOINT } from './endpoints';
import { USER_TYPE } from '../ui/constants';
import { PAGES_FULL_ROUTES } from '../routing/pages';
import {
  setDoctorCreditCardData,
  setDoctorOfficeData,
  setDoctorPersonalData,
  setIsSignInSignUpModalOpen,
  setIsUserLoggedIn,
  setLoginError,
  setUserId,
  setUserType,
} from '../redux/actions';

export const useHandleSigning = (): Function => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSigning = (isSignUp: boolean, values: Object) => {
    const getRedirectPath = (userType: string): string => {
      if (userType.toLowerCase() === USER_TYPE.PATIENT) {
        return isSignUp ? PAGES_FULL_ROUTES.REGISTER_PATIENT : PAGES_FULL_ROUTES.PATIENT_HOME_PAGE;
      }

      return isSignUp ? PAGES_FULL_ROUTES.REGISTER_DOCTOR_PERSONAL_DATA : PAGES_FULL_ROUTES.DOCTOR_HOME_PAGE;
    };

    const resolvedUrl = isSignUp ? REGISTER_USER_ENDPOINT : LOGIN_USER_ENDPOINT;

    axios
      .post(`${BASE_URL}${resolvedUrl}`, values)
      ?.then((result: Object) => {
        dispatch(setUserId(result?.data));
        dispatch(setIsSignInSignUpModalOpen(false));
        dispatch(setIsUserLoggedIn(true));
        dispatch(setUserType(result?.data?.userType));
        dispatch(setLoginError(null));

        // TODO: Refactor this part.
        dispatch(setDoctorPersonalData({}));
        dispatch(setDoctorOfficeData({}));
        dispatch(setDoctorCreditCardData({}));
        history.push(getRedirectPath(result?.data?.userType));
      })
      ?.catch((error: Object) => {
        dispatch(setLoginError(error?.response?.data));
      });
  };

  return handleSigning;
};
