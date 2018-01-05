import * as actionTypes from './action-types'

export const addTask = (name) => ({
  type: actionTypes.ADD_TASK,
  payload: {
    task: {
      name: name
    }
  }
})

export const changeNewTaskName = (newTaskName) => ({
  type: actionTypes.CHANGE_NEW_TASK_NAME,
  payload: {
    newTaskName
  }
})

export const deleteTask = (name) => ({
  type: actionTypes.DELETE_TASK,
  payload: {
    task: {
      name: name
    }
  }

})

export const completeTask = (name) => ({
  type: actionTypes.COMPLETE_TASK,
  payload: {
    task: {
      name: name
    }
  }
})
