import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as taskList from '../../modules/tasks/index'
import TaskBar from './TaskBar'

function mapStateToProps (state) {
  return {
    newTaskName: state.taskList.newTaskName,
    newTaskCategory: state.taskList.newTaskCategory
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addTask: taskList.actionCreators.addTask,
    changeNewTaskName: taskList.actionCreators.changeNewTaskName,
    changeNewTaskCategory: taskList.actionCreators.changeNewTaskCategory
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBar)
