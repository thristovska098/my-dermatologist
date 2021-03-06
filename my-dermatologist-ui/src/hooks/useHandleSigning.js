// @flow
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BASE_URL, CHECK_PASSWORD_ENDPOINT, CHECK_USERNAME_ENDPOINT } from './endpoints';
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

    axios
      .post(`${BASE_URL}${CHECK_USERNAME_ENDPOINT}`, values, {
        params: {
          isSignUp,
        },
      })
      ?.then((result: Object) => {
        dispatch(setUserId(result?.data));
        dispatch(setLoginError(null));

        axios
          .post(`${BASE_URL}${CHECK_PASSWORD_ENDPOINT}`, values, {
            params: {
              userId: result?.data,
            },
          })
          ?.then((response: Object) => {
            dispatch(setIsSignInSignUpModalOpen(false));
            dispatch(setIsUserLoggedIn(true));
            dispatch(setUserType(response?.data?.userType));
            dispatch(setLoginError(null));
            dispatch(setDoctorPersonalData({}));
            dispatch(setDoctorOfficeData({}));
            dispatch(setDoctorCreditCardData({}));
            history.push(getRedirectPath(response?.data?.userType));
          })
          ?.catch((error: Object) => {
            dispatch(setLoginError(error?.response?.data));
          });
      })
      ?.catch((error: Object) => {
        dispatch(setLoginError(error?.response?.data));
      });
  };

  return handleSigning;
};
