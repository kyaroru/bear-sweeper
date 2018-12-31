// @flow

import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../action/Modal';

const initialState = {
  visible: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { visible: true };
    case HIDE_MODAL:
      return { visible: false };
    default:
      return state;
  }
};

export default timerReducer;
