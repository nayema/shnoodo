import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

class TaskList extends Component {
  render () {
    return (
      <div className="container">
        <table className="table table-hover col">
          <tbody>
            {this.props.tasks.map(task =>
              <tr key={task}>
                <td>{task}</td>
                <td align="right">
                  <button
                    className="btn btn-danger remove-button"
                    onClick={() => this.props.deleteTask(task)}
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
