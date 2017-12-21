import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import classNames from 'classnames'

import './TaskList.css'

class TaskList extends Component {
  render () {
    const Task = (props) => {
      const taskClasses = classNames({
        'completedTask': props.completed === true
      })
      return (
        <span className={taskClasses}>{props.name}</span>
      )
    }
    return (
      <div className="container">
        <table className="table table-hover col">
          <tbody>
            {this.props.tasks.map(task =>
              <tr key={task.name}>
                <td onClick={() => this.props.completeTask(task.name)}>
                  <Task
                    name={task.name}
                    completed={task.completed}
                  />
                </td>
                <td align="right">
                  <button
                    className="btn btn-danger remove-button"
                    onClick={() => this.props.deleteTask(task.name)}
                  >
                    <FontAwesome name="trash"/>
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TaskList
