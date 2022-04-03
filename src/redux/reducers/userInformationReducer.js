import { reducerWithActionMappings } from '../utils';
import { SET_IS_USER_LOGGED_IN, SET_USER_TYPE } from '../actions';

export const userInformationReducer = reducerWithActionMappings(
  {
    [SET_USER_TYPE]: setUserType,
    [SET_IS_USER_LOGGED_IN]: setIsUserLoggedIn,
  },
  { isUserLoggedIn: false },
);

function setUserType(state, action) {
  return {
    ...state,
    userType: action.userType,
  };
}

function setIsUserLoggedIn(state, action) {
  return {
    ...state,
    isUserLoggedIn: action.isUserLoggedIn,
  };
}
