import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreators from '../action-creators'
import { bindActionCreators } from 'redux'
import Header from './Header'
import TaskBar from './TaskBar'
import TaskList from './TaskList'

class App extends Component {
  render () {
    return (
      <div className="container-fluid">
        <Header/>
        <TaskBar
          addTask={this.props.actions.addTask}
        />
        <TaskList
          tasks={this.props.state.tasks}
          deleteTask={this.props.actions.deleteTask}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
