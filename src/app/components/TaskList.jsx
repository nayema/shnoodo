import React from 'react'
import FontAwesome from 'react-fontawesome'
import classNames from 'classnames'

import './TaskList.css'

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  const Task = ({ task }) => {
    const taskClasses = classNames(
      { 'completedTask': task.completed === true }
    )
    return (
      <div className={taskClasses}>{task.name}</div>
    )
  }

  const TaskRow = ({ task }) => {
    return (
      <tr>
        <td className="task" onClick={() => completeTask(task.name)}>
          <Task task={task}/>
        </td>
        <td align="right">
          <button
            className="btn btn-danger remove-button"
            onClick={() => deleteTask(task.name)}
          >
            <FontAwesome name="trash"/>
          </button>
        </td>
      </tr>
    )
  }

  const TaskTable = ({ tasks }) => {
    return (
      <div>
        <table className="table table-hover col">
          <tbody>
<<<<<<< HEAD
            {this.props.tasks.map(task =>
              <tr key={task.name}>
                <td>{task.name}</td>
                <td align="right">
                  <button
                    className="btn btn-danger remove-button"
                    onClick={() => this.props.deleteTask(task.name)}
                  >
                    <FontAwesome name="trash"/>
                  </button>
                </td>
              </tr>
=======
            {tasks.map(task =>
              <TaskRow key={task.name} task={task}/>
>>>>>>> complete-task
            )}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="container">
      <nav className="nav nav-tabs" id="myTab" role="tablist">
        <a
          className="nav-item nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true">Incomplete Tasks
        </a>
        <a
          className="nav-item nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-profile"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false">Completed Tasks
        </a>
        <a
          className="nav-item nav-link"
          id="nav-contact-tab"
          data-toggle="tab"
          href="#nav-contact"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false">View All
        </a>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab">
          <TaskTable tasks={tasks.filter(task => task.completed !== true)}/>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab">
          <TaskTable
            tasks={tasks.filter(task => task.completed === true)}
          />
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab">
          <TaskTable tasks={tasks}/>
        </div>
      </div>
    </div>
  )
}

export default TaskList
