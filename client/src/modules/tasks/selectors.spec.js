import * as selectors from './selectors'
import * as constants from './constants'

describe('get visible tasks selector', () => {
  it('shows all tasks when show all is selected', () => {
    const state = {
      visibilityFilter: constants.VisibilityFilters.SHOW_ALL,
      tasks: [
        { name: 'Some Task 1', completed: true },
        { name: 'Some Task 2', completed: false }
      ]
    }

    const tasks = selectors.getVisibleTasks(state)

    expect(tasks).toEqual(expect.objectContaining([
      { name: 'Some Task 1', completed: true },
      { name: 'Some Task 2', completed: false }
    ]))
  })

  it('shows completed tasks when show completed is selected', () => {
    const state = {
      visibilityFilter: constants.VisibilityFilters.SHOW_COMPLETED,
      tasks: [
        { name: 'Some Task 1', completed: true },
        { name: 'Some Task 2', completed: false }
      ]
    }

    const tasks = selectors.getVisibleTasks(state)

    expect(tasks).toEqual(expect.objectContaining([
      { name: 'Some Task 1', completed: true }
    ]))
  })

  it('shows active tasks when show active is selected', () => {
    const state = {
      visibilityFilter: constants.VisibilityFilters.SHOW_ACTIVE,
      tasks: [
        { name: 'Some Task 1', completed: true },
        { name: 'Some Task 2', completed: false }
      ]
    }

    const tasks = selectors.getVisibleTasks(state)

    expect(tasks).toEqual(expect.objectContaining([
      { name: 'Some Task 2', completed: false }
    ]))
  })
})
