import { reducerWithActionMappings } from '../utils';
import { SET_IS_PAYMENT_MODAL_OPEN, SET_IS_SIGN_IN_SIGN_UP_OPEN } from '../actions';

export const commonReducer = reducerWithActionMappings(
  {
    [SET_IS_SIGN_IN_SIGN_UP_OPEN]: setIsSignInSignUpModalOpen,
    [SET_IS_PAYMENT_MODAL_OPEN]: setIsPaymentModalOpen,
  },
  { isSignInSignUpModalOpen: false, isPaymentModalOpen: false },
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
