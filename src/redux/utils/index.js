/* eslint-disable */
export function reducerWithActionMappings(actionMappings, initialState) {
  return function configuredReducer(state = initialState, action) {
    const reducer = actionMappings[action.type];
    if (reducer) {
      return reducer(state, action);
    }

    return state;
  };
}
