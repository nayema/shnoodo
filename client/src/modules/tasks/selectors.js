import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.tasks.visibilityFilter
const getTasks = (state) => state.tasks.tasks

export const getVisibleTasks = createSelector(
  [getVisibilityFilter, getTasks],
  (visibilityFilter, tasks) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return tasks
      case 'SHOW_COMPLETED':
        return tasks.filter(task => task.completed)
      case 'SHOW_ACTIVE':
        return tasks.filter(task => !task.completed)
      default:
        return tasks
    }
  }
)
