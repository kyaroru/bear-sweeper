// @flow

import { createAction } from 'redux-actions';

export const SHOW_MODAL = 'SHOW_MODAL';
export const SHOW_INFO_MODAL = 'SHOW_INFO_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const HIDE_INFO_MODAL = 'HIDE_INFO_MODAL';

export const showModal = createAction(SHOW_MODAL);
export const showInfoModal = createAction(SHOW_INFO_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const hideInfoModal = createAction(HIDE_INFO_MODAL);
