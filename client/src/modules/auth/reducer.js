import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'
import * as AuthService from '../../auth-utils/AuthService'

const initialState = {
  isAuthenticated: !AuthService.isTokenExpired(),
  isFetching: false,
  profile: AuthService.getProfile(),
  error: null
}

const reducer = handleActions({
  [actionTypes.LOGIN_REQUEST_STARTED]: (state) => ({
    ...state,
    isFetching: true,
    error: null
  }),
  [actionTypes.LOGIN_REQUEST_SUCCEEDED]: (state, action) => ({
    ...state,
    isAuthenticated: true,
    isFetching: false,
    profile: action.payload.profile
  }),
  [actionTypes.LOGIN_ERROR_SUCCEEDED]: (state, action) => ({
    ...state,
    isAuthenticated: false,
    isFetching: false,
    profile: {},
    error: action.payload
  }),
  [actionTypes.LOGOUT_SUCCEEDED]: (state) => ({
    ...state,
    isAuthenticated: false,
    profile: {}
  })
}, initialState)

export default reducer