// @flow

import { createAction } from 'redux-actions';

export const TIMER_START = 'TIMER_START';
export const TIMER_STOP = 'TIMER_STOP';
export const TIMER_INCREMENT = 'TIMER_INCREMENT';
export const TIMER_RESET = 'TIMER_RESET';

export const timerStart = createAction(TIMER_START);
export const timerStop = createAction(TIMER_STOP);
export const timerIncrement = createAction(TIMER_INCREMENT);
export const timerReset = createAction(TIMER_RESET);
