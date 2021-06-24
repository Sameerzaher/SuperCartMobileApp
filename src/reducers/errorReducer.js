import { DISMISS_ERROR, SET_ERROR } from '../types';

const initialState = {
  message: '',
};

export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_ERROR:
      newState = {
        ...state,
        message: action.payload,
      };
      break;
    case DISMISS_ERROR:
      newState = {
        ...state,
        message: '',
      };
      break;
    default:
      newState = state;
  }
  return newState;
};
