import {
  actionChannel, call, take, put, race,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { timerIncrement, TIMER_STOP, TIMER_START } from '../action/Timer';

function* runTimer() {
  const channel = yield actionChannel(TIMER_START);

  while (yield take(channel)) {
    while (true) { // eslint-disable-line
      const winner = yield race({
        stopped: take(TIMER_STOP),
        tick: call(delay, 1000),
      });

      if (!winner.stopped) {
        yield put(timerIncrement());
      } else {
        break;
      }
    }
  }
}

export default runTimer;
