import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toHaveProperty('tasks', [])
    expect(nextState).toHaveProperty('newTaskName', '')
  })

  it('returns previous state if not provided with a task name', () => {
    const previousState = { tasks: [], newTaskName: '' }
    const task = ''
    const addsTaskAction = actionCreators.addTask(task)

    const nextState = reducer(previousState, addsTaskAction)

    expect(nextState).toHaveProperty('tasks', [])
    expect(nextState).toHaveProperty('newTaskName', '')
  })

  it('adds task to task list', () => {
    const previousState = { tasks: [], newTaskName: '' }
    const task = 'Some Task'
    const addsTaskAction = actionCreators.addTask(task)

    const nextState = reducer(previousState, addsTaskAction)

    expect(nextState).toHaveProperty('tasks', [{ name: 'Some Task' }])
    expect(nextState).toHaveProperty('newTaskName', '')
  })

  it('changes new task name', () => {
    const changeNewTaskNameAction = actionCreators.changeNewTaskName('Some New Task')

    const nextState = reducer(undefined, changeNewTaskNameAction)

    expect(nextState).toHaveProperty('newTaskName', 'Some New Task')
  })

  it('deletes task from existing task list', () => {
    const previousState = { tasks: [{ name: 'Some Existing Task' }] }
    const deleteTaskAction = actionCreators.deleteTask('Some Existing Task')

    const nextState = reducer(previousState, deleteTaskAction)

    expect(nextState).toHaveProperty('tasks', [])
  })
})
