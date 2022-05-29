export function reducerWithActionMappings(actionMappings, initialState) {
  // eslint-disable-next-line default-param-last
  return function configuredReducer(state = initialState, action) {
    const reducer = actionMappings[action.type];
    if (reducer) {
      return reducer(state, action);
    }

    return state;
  };
}
