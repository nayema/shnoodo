import Auth0Lock from 'auth0-lock'
import { put, call, takeEvery, all, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import config from '../../auth-utils/config'

let lock

function * onLoad () {
  const configureLock = () =>
    new Promise((resolve, reject) => {
      lock = new Auth0Lock(
        config.AUTH0_CLIENT_ID,
        config.AUTH0_DOMAIN,
        {
          auth: {
            redirectUrl: config.REDIRECT_URL,
            responseType: 'token id_token'
          },
          languageDictionary: { title: 'Shnoodo (Development)' }
        }
      )

      lock.on('authenticated', (authResult) => {
        lock.getUserInfo(
          authResult.accessToken,
          (error, profile) => {
            if (!error) {
              lock.hide()
              resolve({ profile, idToken: authResult.idToken })
            }
          }
        )
      })

      lock.on('unrecoverable_error', (error) => {
        lock.hide()
        reject(error)
      })
    })

  try {
    if (localStorage.getItem('profile') && localStorage.getItem('idToken')) {
      yield put(actionCreators.alreadyAuthenticated(localStorage.getItem('profile'), localStorage.getItem('idToken')))
    }
    const { profile, idToken } = yield call(configureLock)
    localStorage.setItem('profile', profile)
    localStorage.setItem('idToken', idToken)

    yield put(actionCreators.loginRequestSucceeded(profile, idToken))
    yield put(push('/'))
  } catch (error) {
    yield put(actionCreators.loginRequestErrored(error))
    yield put(push('/'))
  }
}

function * login () {
  const loginLock = () =>
    new Promise((resolve, reject) => {
      lock.show()
    })
  yield call(loginLock)
}

function * logout () {
  localStorage.removeItem('profile')
  localStorage.removeItem('idToken')

  const logoutLock = () =>
    new Promise((resolve, reject) => {
      lock.logout({ returnTo: 'http://localhost:3000/' })
    })
  yield call(logoutLock)
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
