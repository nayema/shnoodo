import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as auth from '../../modules/auth'
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
    loginRequestStarted: auth.actionCreators.loginRequestStarted,
    logoutRequestStarted: auth.actionCreators.logoutRequestStarted
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBar)
