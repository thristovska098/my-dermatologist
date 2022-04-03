import { reducerWithActionMappings } from '../utils';
import { SET_USER_TYPE } from '../actions';

export const userInformationReducer = reducerWithActionMappings(
  {
    [SET_USER_TYPE]: setUserType,
  },
  {},
);

function setUserType(state, action) {
  return {
    ...state,
    userType: action.userType,
  };
}
