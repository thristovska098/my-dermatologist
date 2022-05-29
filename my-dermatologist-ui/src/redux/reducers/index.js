// @flow

// Utils
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

// Reducers
import { citiesReducer } from './citiesReducer';
import { userInformationReducer } from './userInformationReducer';
import { commonReducer } from './commonReducer';

// Types
import type { Reducer } from '../../types/types.flow';

/**
 * The root reducer.
 * Entry-point to the application state shape.
 */
export const rootReducer: Reducer<Object> = (history) =>
  combineReducers({
    router: connectRouter(history),
    citiesList: citiesReducer,
    userInformation: userInformationReducer,
    common: commonReducer,
  });
