import * as actionTypes from './action-types'

export function addTask (name) {
  return {
    type: actionTypes.ADD_TASK,
    payload: {
      task: {
        name: name
      }
    }
  }
}

export function deleteTask (name) {
  return {
    type: actionTypes.DELETE_TASK,
    payload: {
      task: {
        name: name
      }
    }
  }
}

export function completeTask (name) {
  return {
    type: actionTypes.COMPLETE_TASK,
    payload: {
      task: {
        name: name
      }
    }
  }
}
