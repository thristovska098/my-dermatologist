import { reducerWithActionMappings } from '../utils';
import { SET_IS_USER_LOGGED_IN, SET_USER_ID, SET_USER_TYPE } from '../actions';

export const userInformationReducer = reducerWithActionMappings(
  {
    [SET_USER_TYPE]: setUserType,
    [SET_IS_USER_LOGGED_IN]: setIsUserLoggedIn,
    [SET_USER_ID]: setUserId,
  },
  { isUserLoggedIn: false, userId: undefined },
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

function setUserId(state, action) {
  return {
    ...state,
    userId: action.userId,
  };
}
