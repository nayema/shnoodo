import Auth0Lock from 'auth0-lock'
import { put, call, takeEvery, all, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'

let lock

function * onLoad () {
  const configureLock = () =>
    new Promise((resolve, reject) => {
      lock = new Auth0Lock(
        process.env.REACT_APP_AUTH0_CLIENT_ID,
        process.env.REACT_APP_AUTH0_DOMAIN,
        {
          auth: {
            redirectUrl: process.env.REACT_APP_REDIRECT_URL,
            responseType: 'token id_token'
          },
          languageDictionary: { title: process.env.REACT_APP_TITLE }
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
  yield call(() => lock.show())
}

function * logout () {
  localStorage.removeItem('profile')
  localStorage.removeItem('idToken')

  yield call(() => lock.logout({ returnTo: process.env.REACT_APP_LOGOUT_URL }))
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
