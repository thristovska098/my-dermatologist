import { reducerWithActionMappings } from '../utils';
import {
  SET_IS_PAYMENT_MODAL_OPEN,
  SET_IS_PAYMENT_OUTCOME_MODAL_OPEN,
  SET_IS_RESPOND_APPOINTMENT_MODAL_OPEN,
  SET_IS_SIGN_IN_SIGN_UP_OPEN,
} from '../actions';

export const commonReducer = reducerWithActionMappings(
  {
    [SET_IS_SIGN_IN_SIGN_UP_OPEN]: setIsSignInSignUpModalOpen,
    [SET_IS_PAYMENT_MODAL_OPEN]: setIsPaymentModalOpen,
    [SET_IS_PAYMENT_OUTCOME_MODAL_OPEN]: setIsPaymentOutcomeModalOpen,
    [SET_IS_RESPOND_APPOINTMENT_MODAL_OPEN]: setIsRespondModalModalOpen,
  },
  {
    isSignInSignUpModalOpen: false,
    isPaymentModalOpen: false,
    isPaymentOutcomeModalOpen: false,
    modalOpenedForAppointmentId: null,
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

function setIsPaymentOutcomeModalOpen(state, action) {
  return {
    ...state,
    isPaymentOutcomeModalOpen: action.isPaymentOutcomeModalOpen,
  };
}

function setIsRespondModalModalOpen(state, action) {
  return {
    ...state,
    modalOpenedForAppointmentId: action.modalOpenedForAppointmentId,
  };
}
