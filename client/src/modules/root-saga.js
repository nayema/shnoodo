import { fork, all } from 'redux-saga/effects'

import * as auth from './auth'
import * as tasks from './tasks'

export default function * rootSaga () {
  yield all([
    fork(auth.sagas),
    fork(tasks.sagas)
  ])
}
