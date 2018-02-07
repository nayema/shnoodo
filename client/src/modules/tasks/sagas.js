import { put, call, takeEvery, all, fork } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as actionTypes from './action-types'
import * as repository from './repository'

function * getAll () {
  yield put(actionCreators.loadTasksStarted())
  const tasks = yield call(repository.getAll)
  yield put(actionCreators.loadTasksSucceeded(tasks))
}

function * add (action) {
  const task = yield call(repository.add, action.payload)
  yield put(actionCreators.addTaskSucceeded(task))
}

function * remove (action) {
  yield call(repository.remove, action.payload)
  yield put(actionCreators.removeTaskSucceeded(action.payload))
}

function * watchAdd () {
  yield takeEvery(actionTypes.ADD_TASK_STARTED, add)
}

function * watchRemove () {
  yield takeEvery(actionTypes.REMOVE_TASK_STARTED, remove)
}

function * sagas () {
  yield all([
    fork(getAll),
    fork(watchAdd),
    fork(watchRemove)
  ])
}

export default sagas
