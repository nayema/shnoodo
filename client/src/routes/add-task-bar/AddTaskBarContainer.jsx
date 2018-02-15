import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as tasks from '../../modules/tasks'
import TaskBar from './AddTaskBar'

function mapStateToProps (state) {
  return {
    newTask: state.tasks.newTask
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addTaskStarted: tasks.actionCreators.addTaskStarted,
    changeNewTask: tasks.actionCreators.changeNewTask,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBar)
