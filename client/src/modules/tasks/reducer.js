import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  tasks: [],
  newTask: {
    name: '',
    category: ''
  },
  loadingTasks: false,
  taskAddingInProgress: false
}

const reducer = handleActions({
  [actionTypes.LOAD_TASKS_STARTED]: (state) => ({
    ...state,
    loadingTasks: true
  }),
  [actionTypes.LOAD_TASKS_SUCCEEDED]: (state, action) => ({
    ...state,
    tasks: action.payload,
    loadingTasks: false
  }),
  [actionTypes.CHANGE_NEW_TASK]: (state, action) => ({
    ...state,
    newTask: { ...state.newTask, ...action.payload }
  }),
  [actionTypes.ADD_TASK_STARTED]: (state) => ({
    ...state,
    taskAddingInProgress: true
  }),
  [actionTypes.ADD_TASK_SUCCEEDED]: (state, action) => ({
    ...state,
    taskAddingInProgress: false,
    tasks: state.tasks.concat([action.payload]),
    newTask: initialState.newTask
  }),
  [actionTypes.REMOVE_TASK_SUCCEEDED]: (state, action) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== action.payload.id)
  })
}, initialState)

export default reducer
