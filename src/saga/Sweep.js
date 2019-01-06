import { takeLatest, all, fork, put, select } from 'redux-saga/effects';

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
  clearHints,
} from '../action/Game';

import {
  getIsLose,
  getIsWon,
  getTimerStarted,
} from '../reducer';

function* sweep() {
  yield put(check());
  yield put(clearHints())
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

function* watchSweep() {
  yield takeLatest(SWEEP, sweep);
}

export default function* game() {
  yield all([
    fork(watchSweep),
  ]);
}