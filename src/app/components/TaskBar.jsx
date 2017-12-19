import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import KeyPress from 'react-keypress'

class TaskBar extends Component {
  constructor (props) {
    super(props)

    this.addTaskOnClickOrPress = this.addTaskOnClickOrPress.bind(this)
  }

  addTaskOnClickOrPress () {
    const newTaskInput = document.getElementById('new-task')
    this.props.addTask(newTaskInput.value)
    newTaskInput.value = ''
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control mb-2 mb-sm-0"
              id="new-task"
              placeholder="Add your task here"
              onKeyPress={KeyPress('enter', this.addTaskOnClickOrPress)}
            />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-primary"
              onClick={this.addTaskOnClickOrPress}
            >
              <FontAwesome name="plus"/>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskBar
