import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadTasksStarted = createAction(
  actionTypes.LOAD_TASKS_STARTED
)
export const loadTasksSucceeded = createAction(
  actionTypes.LOAD_TASKS_SUCCEEDED,
  (tasks) => (tasks)
)
export const changeNewTask = createAction(
  actionTypes.CHANGE_NEW_TASK,
  (task) => (task)
)
export const addTaskStarted = createAction(
  actionTypes.ADD_TASK_STARTED,
  (task) => (task)
)
export const addTaskSucceeded = createAction(
  actionTypes.ADD_TASK_SUCCEEDED,
  (task) => (task)
)
export const removeTaskStarted = createAction(
  actionTypes.REMOVE_TASK_STARTED,
  (task) => (task)
)
export const removeTaskSucceeded = createAction(
  actionTypes.REMOVE_TASK_SUCCEEDED,
  (task) => (task)
)
export const toggleTask = createAction(
  actionTypes.TOGGLE_TASK,
  (id) => (id)
)
export const setVisibilityFilter = createAction(
  actionTypes.SET_VISIBILITY_FILTER,
  (filter) => (filter)
)
