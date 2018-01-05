import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as tasksList from '../../modules/task-list'
import TaskList from './TaskList'

function mapStateToProps (state) {
  return {
    tasks: state.tasksList.tasks,
    newTaskName: state.tasksList.newTaskName
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addTask: tasksList.actionCreators.addTask,
    changeNewTaskName: tasksList.actionCreators.changeNewTaskName,
    deleteTask: tasksList.actionCreators.deleteTask,
    completeTask: tasksList.actionCreators.completeTask
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
