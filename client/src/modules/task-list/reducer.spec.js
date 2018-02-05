import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toHaveProperty('tasks', [])
    expect(nextState).toHaveProperty('newTaskName', '')
    expect(nextState).toHaveProperty('newTaskCategory', '')
  })

  it('returns previous state if not provided with a task name', () => {
    const previousState = { tasks: [], newTaskName: '', newTaskCategory: '' }
    const task = ''
    const addsTaskAction = actionCreators.addTask(task)

    const nextState = reducer(previousState, addsTaskAction)

    expect(nextState).toHaveProperty('tasks', [])
    expect(nextState).toHaveProperty('newTaskName', '')
    expect(nextState).toHaveProperty('newTaskCategory', '')
  })

  it('adds task to task list', () => {
    const previousState = { tasks: [], newTaskName: 'Some Task', newTaskCategory: 'Some Category' }
    const addsTaskAction = actionCreators.addTask(previousState.newTaskName, previousState.newTaskCategory)

    const nextState = reducer(previousState, addsTaskAction)

    expect(nextState).toHaveProperty('tasks', [{ name: 'Some Task', category: 'Some Category' }])
    expect(nextState).toHaveProperty('newTaskName', '')
    expect(nextState).toHaveProperty('newTaskCategory', '')
  })

  it('changes new task name', () => {
    const changeNewTaskNameAction = actionCreators.changeNewTaskName('Some New Task')

    const nextState = reducer(undefined, changeNewTaskNameAction)

    expect(nextState).toHaveProperty('newTaskName', 'Some New Task')
  })

  it('changes task category', () => {
    const changeNewTaskCategoryAction = actionCreators.changeNewTaskCategory('Some Category')

    const nextState = reducer(undefined, changeNewTaskCategoryAction)

    expect(nextState).toHaveProperty('newTaskCategory', 'Some Category')
  })

  it('deletes task from existing task list', () => {
    const previousState = { tasks: [{ name: 'Some Existing Task' }] }
    const deleteTaskAction = actionCreators.deleteTask('Some Existing Task')

    const nextState = reducer(previousState, deleteTaskAction)

    expect(nextState).toHaveProperty('tasks', [])
  })

  it('completes task', () => {
    const previousState = { tasks: [{ name: 'Some Task 1' }, { name: 'Some Task 2' }] }
    const completeTaskAction = actionCreators.completeTask('Some Task 1')

    const nextState = reducer(previousState, completeTaskAction)

    expect(nextState).toHaveProperty('tasks', [{ name: 'Some Task 2' }, { name: 'Some Task 1', completed: true }])
  })
})
