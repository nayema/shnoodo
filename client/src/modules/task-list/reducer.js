import * as actionTypes from './action-types'

const BLANK_STATE = {
  tasks: [],
  newTaskName: '',
  newTaskCategory: ''
}

function reducer (state = BLANK_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK: {
      if (action.payload.task.name === '') {
        return state
      }
      return {
        ...state,
        tasks: state.tasks.concat(action.payload.task),
        newTaskName: '',
        newTaskCategory: ''
      }
    }
    case actionTypes.CHANGE_NEW_TASK_NAME: {
      return {
        ...state,
        newTaskName: action.payload.newTaskName
      }
    }
    case actionTypes.CHANGE_NEW_TASK_CATEGORY: {
      return {
        ...state,
        newTaskCategory: action.payload.newTaskCategory
      }
    }
    case actionTypes.DELETE_TASK: {
      const oldTasks = state.tasks
      return {
        ...state,
        tasks: oldTasks.filter((task) => task.name !== action.payload.task.name)
      }
    }
    case actionTypes.COMPLETE_TASK: {
      const oldTasks = state.tasks
      const otherTasks = oldTasks.filter((task) => task.name !== action.payload.task.name)
      const taskToComplete = oldTasks.filter((task) => task.name === action.payload.task.name)[0]
      taskToComplete.completed = true
      return {
        ...state,
        tasks: otherTasks.concat(taskToComplete)
      }
    }
    default:
      return state
  }
}

export default reducer
