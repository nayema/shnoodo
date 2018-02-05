import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as configurationTabs from '../../modules/configuration-tabs'
import * as taskList from '../../modules/task-list'

import ConfigurationTabs from './ConfigurationTabs'

function mapStateToProps (state) {
  return {
    activeTabIndex: state.configurationTabs.activeTabIndex,
    tasks: state.taskList.tasks
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    changeConfigTab: configurationTabs.actionCreators.changeConfigTab,
    completeTask: taskList.actionCreators.completeTask,
    deleteTask: taskList.actionCreators.deleteTask
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationTabs)
