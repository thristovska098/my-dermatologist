import { reducerWithActionMappings } from '../utils';
import { SET_CITIES } from '../actions';

export const citiesReducer = reducerWithActionMappings(
  {
    [SET_CITIES]: setCities,
  },
  {},
);

function setCities(state, action) {
  return {
    ...state,
    cities: action.cities,
  };
}
