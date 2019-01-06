// @flow

import {
  SHOW_MODAL,
  HIDE_MODAL,
  SHOW_INFO_MODAL,
  HIDE_INFO_MODAL
} from '../action/Modal';
import { combineReducers } from 'redux';

const initialState = {
  visible: false,
};

const success = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { visible: true };
    case HIDE_MODAL:
      return { visible: false };
    default:
      return state;
  }
};

const info = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO_MODAL:
      return { visible: true };
    case HIDE_INFO_MODAL:
      return { visible: false };
    default:
      return state;
  }
};

export default combineReducers({
  success,
  info,
});
