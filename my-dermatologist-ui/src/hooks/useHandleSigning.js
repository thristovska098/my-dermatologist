// @flow

// Hooks
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Utils
import axios from 'axios';

// Constants
import { BASE_URL, CHECK_PASSWORD_ENDPOINT, CHECK_USERNAME_ENDPOINT } from './endpoints';
import { USER_TYPE } from '../ui/constants';
import { PAGES_FULL_ROUTES } from '../routing/pages';

// Actions
import { setIsSignInSignUpModalOpen, setIsUserLoggedIn, setLoginError, setUserId, setUserType } from '../redux/actions';

export const useHandleSigning = (): Function => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSigning = (isSignUp: boolean, values: Object) => {
    const getRedirectPath = (): string => {
      if (values?.userType.toLowerCase() === USER_TYPE.PATIENT) {
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
            history.push(getRedirectPath());
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
