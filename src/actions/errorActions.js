import { DISMISS_ERROR, SET_ERROR } from '../types';

export const setGroceryError = (errorMsg) => (dispatch) => {
  dispatch({
    type: SET_ERROR,
    payload: errorMsg,
  });
};

export const dismissGroceryError = () => (dispatch) => {
  dispatch({
    type: DISMISS_ERROR,
  });
};
