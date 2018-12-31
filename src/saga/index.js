import timerSaga from './Timer';
import sweepSaga from './Sweep';
import gameSaga from './Game';

export default function* rootSaga() {
  yield [
    gameSaga(),
    timerSaga(),
    sweepSaga(),
  ];
}
