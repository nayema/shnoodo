import ActionTypes from './action-types'

const BLANK_STATE = { tasks: [] }

function reducer (state = BLANK_STATE, action) {
  switch (action.type) {
    case ActionTypes.ADD_TASK: {
      const newTasks = state.tasks.concat(action.payload.taskName)
      return {
        tasks: newTasks
      }
    }
    case ActionTypes.DELETE_TASK: {
      const oldTasks = state.tasks
      const newTasks = oldTasks.slice()
      const index = oldTasks.indexOf(action.payload.taskName)
      newTasks.splice(index, 1)
      return {
        tasks: newTasks
      }
    }
    default:
      return state
  }
}

export default reducer
