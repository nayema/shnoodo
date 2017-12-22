import React, { Component } from 'react'
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

  const TaskTable = ({ header, tasks }) => {
    return (
      <div>
        <h5>{header}</h5>
        <table className="table table-hover col">
          <tbody>
            {tasks.map(task =>
              <TaskRow key={task.name} task={task}/>
            )}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="container">
      <TaskTable
        header="Incomplete tasks"
        tasks={tasks.filter(task => task.completed !== true)}
      />
      <TaskTable
        header="Completed tasks"
        tasks={tasks.filter(task => task.completed === true)}
      />
    </div>
  )
}

export default TaskList
