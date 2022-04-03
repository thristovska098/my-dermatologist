// @flow

// Utils
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { citiesReducer } from './citiesReducer';
import type { Reducer } from '../../types/types.flow';
import { userInformationReducer } from './userInformationReducer';

/**
 * The root reducer.
 * Entry-point to the application state shape.
 */
export const rootReducer: Reducer<Object> = (history) =>
  combineReducers({
    router: connectRouter(history),
    citiesList: citiesReducer,
    userInformation: userInformationReducer,
  });
