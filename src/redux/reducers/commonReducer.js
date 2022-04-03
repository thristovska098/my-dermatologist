import { reducerWithActionMappings } from '../utils';
import { SET_IS_MODAL_OPEN } from '../actions';

export const commonReducer = reducerWithActionMappings(
  {
    [SET_IS_MODAL_OPEN]: setIsModalOpen,
  },
  { isModalOpen: false },
);

function setIsModalOpen(state, action) {
  return {
    ...state,
    isModalOpen: action.isModalOpen,
  };
}
