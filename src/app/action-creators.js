import ActionTypes from './action-types'

function addTask (taskName) {
  return {
    type: ActionTypes.ADD_TASK,
    payload: {
      taskName: taskName
    }
  }
}

function deleteTask (taskName) {
  return {
    type: ActionTypes.DELETE_TASK,
    payload: {
      taskName: taskName
    }
  }
}

export default { addTask, deleteTask }
