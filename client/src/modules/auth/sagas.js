import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import * as authentication from './authentication'

function * onLoad () {
  if (authentication.isAuthenticated()) {
    yield put(actionCreators.alreadyAuthenticated(authentication.getProfile(), authentication.getIdToken()))
  } else {
    try {
      yield call(authentication.handleLoginRequest)
      yield put(actionCreators.loginRequestSucceeded(authentication.getProfile(), authentication.getIdToken()))
      yield put(push('/'))
    } catch (error) {
      yield put(actionCreators.loginRequestErrored(error))
      yield put(push('/'))
    }
  }
}

function * login () {
  yield call(authentication.login)
}

function * logout () {
  yield call(authentication.logout)
}

function * watchLogin () {
  yield takeEvery(actionTypes.LOGIN_REQUEST_STARTED, login)
}

function * watchLogout () {
  yield takeEvery(actionTypes.LOGOUT_REQUEST_STARTED, logout)
}

function * sagas () {
  yield all([
    fork(onLoad),
    fork(watchLogin),
    fork(watchLogout)
  ])
}

export default sagas
