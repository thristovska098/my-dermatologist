import { reducerWithActionMappings } from '../utils';
import {
  SET_IS_PAYMENT_MODAL_OPEN,
  SET_IS_RESPOND_APPOINTMENT_MODAL_OPEN,
  SET_IS_SIGN_IN_SIGN_UP_OPEN,
  SET_LOGIN_ERROR,
} from '../actions';

export const commonReducer = reducerWithActionMappings(
  {
    [SET_IS_SIGN_IN_SIGN_UP_OPEN]: setIsSignInSignUpModalOpen,
    [SET_IS_PAYMENT_MODAL_OPEN]: setIsPaymentModalOpen,
    [SET_IS_RESPOND_APPOINTMENT_MODAL_OPEN]: setIsRespondModalModalOpen,
    [SET_LOGIN_ERROR]: setLoginError,
  },
  {
    isSignInSignUpModalOpen: false,
    isPaymentModalOpen: false,
    modalOpenedForAppointmentId: null,
    loginError: null,
  },
);

function setIsSignInSignUpModalOpen(state, action) {
  return {
    ...state,
    isSignInSignUpModalOpen: action.isSignInSignUpModalOpen,
  };
}

function setIsPaymentModalOpen(state, action) {
  return {
    ...state,
    isPaymentModalOpen: action.isPaymentModalOpen,
  };
}

function setIsRespondModalModalOpen(state, action) {
  return {
    ...state,
    modalOpenedForAppointmentId: action.modalOpenedForAppointmentId,
  };
}

function setLoginError(state, action) {
  return {
    ...state,
    loginError: action.loginError,
  };
}
