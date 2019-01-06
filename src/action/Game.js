// @flow


import { createAction } from 'redux-actions';

export const CHOOSE_DIFFICULTY = 'CHOOSE_DIFFICULTY';
export const SWEEP = 'SWEEP';
export const FLAG = 'FLAG';
export const UNFLAG = 'UNFLAG';
export const CHECK = 'CHECK';
export const NEW_GAME = 'NEW_GAME';
export const GET_HINTS = 'GET_HINTS';
export const CLEAR_HINTS = 'CLEAR_HINTS';
export const SET_HINT = 'SET_HINT';

export const newGame = createAction(NEW_GAME);
export const getHints = createAction(GET_HINTS);
export const clearHints = createAction(CLEAR_HINTS);
export const setHint = createAction(SET_HINT);
export const chooseDifficulty = createAction(CHOOSE_DIFFICULTY);
export const sweep = createAction(SWEEP);
export const flag = createAction(FLAG);
export const unFlag = createAction(UNFLAG);
export const check = createAction(CHECK);
