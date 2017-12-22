import ActionTypes from './action-types'

const BLANK_STATE = { tasks: [] }

function reducer (state = BLANK_STATE, action) {
  switch (action.type) {
    case ActionTypes.ADD_TASK: {
      const oldTasks = state.tasks
      if (action.payload.task.name === '') {
        return {
          tasks: oldTasks
        }
      }
      const newTasks = oldTasks.concat(action.payload.task)
      return {
        tasks: newTasks
      }
    }
    case ActionTypes.DELETE_TASK: {
      const oldTasks = state.tasks
      const newTasks = oldTasks.filter((task) => task.name !== action.payload.task.name)
      return {
        tasks: newTasks
      }
    }
    case ActionTypes.COMPLETE_TASK: {
      const oldTasks = state.tasks
      const otherTasks = oldTasks.filter((task) => task.name !== action.payload.task.name)
      const taskToComplete = oldTasks.filter((task) => task.name === action.payload.task.name)[0]
      taskToComplete.completed = true
      return {
        tasks: otherTasks.concat(taskToComplete)
      }
    }
    default:
      return state
  }
}

export default reducer
