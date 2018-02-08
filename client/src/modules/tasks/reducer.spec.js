import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toHaveProperty('tasks', [])
    expect(nextState).toHaveProperty('newTask', {
      name: '',
      category: ''
    })
    expect(nextState).toHaveProperty('loadingTasks', false)
    expect(nextState).toHaveProperty('taskAddingInProgress', false)
  })

  describe('when handling loading', () => {
    it('starts tasks loading', () => {
      const loadTasksStartedActions = actionCreators.loadTasksStarted()

      const nextState = reducer(undefined, loadTasksStartedActions)

      expect(nextState).toHaveProperty('loadingTasks', true)
    })

    it('succeeds tasks loading', () => {
      const previousState = { tasks: [], loadingTasks: true }
      const tasks = [{ name: 'Some Transaction', category: 'Some Category' }]
      const loadTasksSucceededAction = actionCreators.loadTasksSucceeded(tasks)

      const nextState = reducer(previousState, loadTasksSucceededAction)

      expect(nextState).toHaveProperty('tasks', tasks)
      expect(nextState).toHaveProperty('loadingTasks', false)
    })
  })

  describe('when handling new', () => {
    it('changes new task property', () => {
      const task = { name: 'Some New Task' }
      const changeNewTaskAction = actionCreators.changeNewTask(task)

      const nextState = reducer(undefined, changeNewTaskAction)

      expect(nextState).toHaveProperty('newTask', expect.objectContaining({ name: 'Some New Task' }))
    })
  })

  describe('when handling adding', () => {
    it('starts task adding', () => {
      const addTaskStartedAction = actionCreators.addTaskStarted()

      const nextState = reducer(undefined, addTaskStartedAction)

      expect(nextState).toHaveProperty('taskAddingInProgress', true)
    })

    it('succeeds task adding', () => {
      const previousState = { tasks: [], taskAddingInProgress: true }
      const task = { name: 'Some Task', category: 'Some Category' }
      const addTaskSucceededAction = actionCreators.addTaskSucceeded(task)

      const nextState = reducer(previousState, addTaskSucceededAction)

      expect(nextState).toHaveProperty('taskAddingInProgress', false)
      expect(nextState).toHaveProperty('tasks', [{ name: 'Some Task', category: 'Some Category' }])
      expect(nextState).toHaveProperty('newTask', {
        name: '',
        category: ''
      })
    })
  })

  describe('when handling removing', () => {
    it('succeeds task removing', () => {
      const previousState = { tasks: [{ id: 7 }] }
      const task = { id: 7 }
      const removeTaskSucceededAction = actionCreators.removeTaskSucceeded(task)

      const nextState = reducer(previousState, removeTaskSucceededAction)

      expect(nextState).toHaveProperty('tasks', [])
    })
  })

  describe('when handling toggling of task completion', () => {
    it('toggles task to be complete', () => {
      const previousState = {
        tasks: [
          { id: 7, name: 'Some Task 1' },
          { id: 999, name: 'Some Task 2' }
        ]
      }
      const taskToComplete = { id: 7 }
      const toggleTaskAction = actionCreators.toggleTask(taskToComplete)

      const nextState = reducer(previousState, toggleTaskAction)

      expect(nextState).toHaveProperty('tasks', [
        { id: 7, name: 'Some Task 1', completed: true },
        { id: 999, name: 'Some Task 2' }
      ])
    })

    it('toggles task to be incomplete', () => {
      const previousState = {
        tasks: [
          { id: 7, name: 'Some Task 1', completed: true },
          { id: 999, name: 'Some Task 2' }
        ]
      }
      const taskToUncomplete = { id: 7 }
      const toggleTaskAction = actionCreators.toggleTask(taskToUncomplete)

      const nextState = reducer(previousState, toggleTaskAction)

      expect(nextState).toHaveProperty('tasks', [
        { id: 7, name: 'Some Task 1', completed: false },
        { id: 999, name: 'Some Task 2' }
      ])
    })
  })

  describe('when handling setting visibility filter', () => {
    it('sets visibility filter', () => {
      const setVisibilityFilterAction = actionCreators.setVisibilityFilter('SHOW_COMPLETED')

      const nextState = reducer(undefined, setVisibilityFilterAction)

      expect(nextState).toHaveProperty('visibilityFilter', 'SHOW_COMPLETED')
    })
  })
})
