import * as actionTypes from './action-types'

export const addTask = (name, category) => ({
  type: actionTypes.ADD_TASK,
  payload: {
    task: {
      name,
      category
    }
  }
})

export const changeNewTaskName = (newTaskName) => ({
  type: actionTypes.CHANGE_NEW_TASK_NAME,
  payload: {
    newTaskName
  }
})

export const changeNewTaskCategory = (newTaskCategory) => ({
  type: actionTypes.CHANGE_NEW_TASK_CATEGORY,
  payload: {
    newTaskCategory
  }
})

export const deleteTask = (name) => ({
  type: actionTypes.DELETE_TASK,
  payload: {
    task: {
      name
    }
  }
})

export const completeTask = (name) => ({
  type: actionTypes.COMPLETE_TASK,
  payload: {
    task: {
      name
    }
  }
})
