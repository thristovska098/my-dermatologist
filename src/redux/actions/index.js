export const SET_CITIES = 'MY_DERMATOLOGIST@CONFIG.SET_CITIES';
export const SET_USER_TYPE = 'MY_DERMATOLOGIST@USER_INFORMATION.SET_USER_TYPE';
export const SET_IS_SIGN_IN_SIGN_UP_OPEN = 'MY_DERMATOLOGIST@COMMON.SET_IS_SIGN_IN_UP_MODAL_OPEN';
export const SET_IS_USER_LOGGED_IN = 'MY_DERMATOLOGIST@USER_INFORMATION.SET_IS_USER_LOGGED_IN ';
export const SET_IS_PAYMENT_MODAL_OPEN = 'MY_DERMATOLOGIST@PATIENT.SET_IS_PAYMENT_MODAL_OPEN';

export function setCountries(cities) {
  return {
    type: SET_CITIES,
    cities,
  };
}

export function setUserType(userType) {
  return {
    type: SET_USER_TYPE,
    userType,
  };
}

export function setIsSignInSignUpModalOpen(isSignInSignUpModalOpen) {
  return {
    type: SET_IS_SIGN_IN_SIGN_UP_OPEN,
    isSignInSignUpModalOpen,
  };
}

export function setIsUserLoggedIn(isUserLoggedIn) {
  return {
    type: SET_IS_USER_LOGGED_IN,
    isUserLoggedIn,
  };
}

export function setIsPaymentModalOpen(isPaymentModalOpen) {
  return {
    type: SET_IS_PAYMENT_MODAL_OPEN,
    isPaymentModalOpen,
  };
}
