import ActionTypes from './action-types'

function addTask (name) {
  return {
    type: ActionTypes.ADD_TASK,
    payload: {
      task: {
        name: name
      }
    }
  }
}

function deleteTask (name) {
  return {
    type: ActionTypes.DELETE_TASK,
    payload: {
      task: {
        name: name
      }
    }
  }
}

function completeTask (name) {
  return {
    type: ActionTypes.COMPLETE_TASK,
    payload: {
      task: {
        name: name
      }
    }
  }
}

export default { addTask, deleteTask, completeTask }
