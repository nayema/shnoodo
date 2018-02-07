import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as tasks from '../../modules/tasks'

import TaskList from '../task-list/TaskList'

function mapStateToProps (state) {
  return {
    tasks: state.tasks.tasks
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    removeTaskStarted: tasks.actionCreators.removeTaskStarted,
    toggleTask: tasks.actionCreators.toggleTask
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
