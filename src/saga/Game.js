import { take, put } from 'redux-saga/effects';
import { newGame } from '../action/Game';
import { timerReset, timerStop } from '../action/Timer';
import {
  CHOOSE_DIFFICULTY,
} from '../action/Game';

function* game() {
  while (yield take(CHOOSE_DIFFICULTY)) {
    yield put(newGame());
    yield put(timerStop());
    yield put(timerReset());
  }
}

export default game;
