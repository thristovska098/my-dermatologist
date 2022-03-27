// @flow

// Utils
import { connectRouter } from 'connected-react-router';
import { Reducer, combineReducers } from 'redux';
import { citiesReducer } from './citiesReducer';

/**
 * The root reducer.
 * Entry-point to the application state shape.
 */
export const rootReducer: Reducer<Object> = (history) =>
  combineReducers({
    router: connectRouter(history),
    citiesList: citiesReducer,
  });
