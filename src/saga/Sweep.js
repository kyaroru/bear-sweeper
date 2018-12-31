import {
  take, put, select,
} from 'redux-saga/effects';

import {
  showModal,
} from '../action/Modal';

import {
  timerStart,
  timerStop,
  timerReset,
} from '../action/Timer';

import {
  SWEEP,
  check,
} from '../action/Game';

import {
  getIsLose,
  getIsWon,
  getTimerStarted,
} from '../reducer';

function* sweep() {
  while (yield take(SWEEP)) {
    yield put(check());
    const state = yield select();
    if (getIsWon(state)) {
      yield put(showModal());
    }
    if (getIsLose(state)) {
      // play sound or show lose modal
    }
    if (getIsLose(state) || getIsWon(state)) {
      yield put(timerStop());
    } else if (!getTimerStarted(state)) {
      yield put(timerReset());
      yield put(timerStart());
    }
  }
}

export default sweep;
