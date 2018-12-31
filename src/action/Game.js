// @flow


import { createAction } from 'redux-actions';

export const CHOOSE_DIFFICULTY = 'CHOOSE_DIFFICULTY';
export const SWEEP = 'SWEEP';
export const FLAG = 'FLAG';
export const UNFLAG = 'UNFLAG';
export const CHECK = 'CHECK';
export const NEW_GAME = 'NEW_GAME';

export const newGame = createAction(NEW_GAME);
export const chooseDifficulty = createAction(CHOOSE_DIFFICULTY);
export const sweep = createAction(SWEEP);
export const flag = createAction(FLAG);
export const unFlag = createAction(UNFLAG);
export const check = createAction(CHECK);
