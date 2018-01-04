import * as actionTypes from './action-types'

const BLANK_STATE = {
  tasks: []
}

function reducer (state = BLANK_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK: {
      if (action.payload.task.name === '') {
        const oldTasks = state.tasks
        return {
          tasks: oldTasks
        }
      }
      const newTasks = state.tasks.concat(action.payload.task)
      return {
        tasks: newTasks
      }
    }
    case actionTypes.DELETE_TASK: {
      const oldTasks = state.tasks
      const newTasks = oldTasks.filter((task) => task.name !== action.payload.task.name)
      return {
        tasks: newTasks
      }
    }
    case actionTypes.COMPLETE_TASK: {
      const oldTasks = state.tasks
      const otherTasks = oldTasks.filter((task) => task.name !== action.payload.task.name)
      const taskToComplete = oldTasks.filter((task) => task.name === action.payload.task.name)[0]
      taskToComplete.completed = true
      const newTasks = otherTasks.concat(taskToComplete)
      return {
        tasks: newTasks
      }
    }
    default:
      return state
  }
}

export default reducer
