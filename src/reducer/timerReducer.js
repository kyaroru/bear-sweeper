// @flow

import {
  TIMER_START,
  TIMER_STOP,
  TIMER_INCREMENT,
  TIMER_RESET,
} from '../action/Timer';

const initialState = {
  isStarted: false,
  count: 0,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIMER_START:
      return { ...state, isStarted: true };
    case TIMER_STOP:
      return { ...state, isStarted: false };
    case TIMER_INCREMENT:
      return { ...state, count: state.count + 1 };
    case TIMER_RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default timerReducer;
