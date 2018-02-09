import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loginRequestStarted = createAction(
  actionTypes.LOGIN_REQUEST_STARTED
)
export const loginRequestSucceeded = createAction(
  actionTypes.LOGIN_REQUEST_SUCCEEDED,
  (profile) => ({ profile })
)
export const loginErrorSucceeded = createAction(
  actionTypes.LOGIN_ERROR_SUCCEEDED,
  (error) => error
)
export const logoutSucceeded = createAction(
  actionTypes.LOGOUT_SUCCEEDED
)
