// @flow

import game from './gameReducer';
import timer from './timerReducer';
import modal from './modalReducer';

export const getIsWon = state => state.game.isWon;
export const getIsLose = state => state.game.isLose;
export const getTimerStarted = state => state.timer.isStarted;

export default { game, timer, modal };
