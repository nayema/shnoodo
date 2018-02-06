import { fork, all } from 'redux-saga/effects'

import * as tasks from './tasks'

export default function * rootSaga () {
  yield all([
    fork(tasks.sagas)
  ])
}
