export const SET_CITIES = 'MY_DERMATOLOGIST@CONFIG.SET_CITIES';
export const SET_USER_TYPE = 'MY_DERMATOLOGIST@USER_INFORMATION.SET_USER_TYPE';
export const SET_IS_SIGN_IN_SIGN_UP_OPEN = 'MY_DERMATOLOGIST@COMMON.SET_IS_SIGN_IN_UP_MODAL_OPEN';
export const SET_IS_USER_LOGGED_IN = 'MY_DERMATOLOGIST@USER_INFORMATION.SET_IS_USER_LOGGED_IN';
export const SET_USER_ID = 'MY_DERMATOLOGIST@USER_INFORMATION.SET_USER_ID';
export const SET_IS_PAYMENT_MODAL_OPEN = 'MY_DERMATOLOGIST@PATIENT.SET_IS_PAYMENT_MODAL_OPEN';
export const SET_IS_RESPOND_APPOINTMENT_MODAL_OPEN = 'MY_DERMATOLOGIST@PATIENT.SET_IS_RESPOND_APPOINTMENT_MODAL_OPEN';
export const SET_LOGIN_ERROR = 'MY_DERMATOLOGIST@PATIENT.SET_LOGIN_ERROR';

export function setCities(cities) {
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

export function setResponseModalOpenedForAppointmentId(modalOpenedForAppointmentId) {
  return {
    type: SET_IS_RESPOND_APPOINTMENT_MODAL_OPEN,
    modalOpenedForAppointmentId,
  };
}

export function setUserId(userId) {
  return {
    type: SET_USER_ID,
    userId,
  };
}

export function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError,
  };
}
