import React from 'react'
import FontAwesome from 'react-fontawesome'
import classNames from 'classnames'
import KeyPress from 'react-keypress'

import './TaskList.css'

const TaskBar = ({ newTaskName, addTask, changeNewTaskName }) => (
  <div className="container">
    <div className="row">
      <div className="col">
        <input
          type="text"
          className="form-control mb-2 mb-sm-0"
          id="new-task"
          placeholder="Add your task here"
          onChange={(e) => changeNewTaskName(e.target.value)}
          onKeyPress={KeyPress('enter', (e) => addTask(e.target.value))}
          value={newTaskName}
        />
      </div>
      <div className="col-auto">
        <button
          className="btn btn-primary"
          onClick={() => {addTask(newTaskName)}}
        >
          <FontAwesome name="plus"/>
        </button>
      </div>
    </div>
  </div>
)

const Task = ({ task }) => {
  const taskClasses = classNames(
    { 'completedTask': task.completed === true }
  )
  return (
    <div className={taskClasses}>{task.name}</div>
  )
}

const TaskRow = ({ task, deleteTask, completeTask }) => (
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

const TaskTable = ({ tasks, deleteTask, completeTask }) => (
  <div>
    <table className="table table-hover col">
      <tbody>
        {tasks.map(task =>
          <TaskRow
            key={task.name}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        )}
      </tbody>
    </table>
  </div>
)

const TaskList = ({ tasks, newTaskName, addTask, changeNewTaskName, deleteTask, completeTask }) => (
  <div>
    <TaskBar
      addTask={addTask}
      newTaskName={newTaskName}
      changeNewTaskName={changeNewTaskName}
    />
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
          <TaskTable
            tasks={tasks.filter(task => task.completed !== true)}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab">
          <TaskTable
            tasks={tasks.filter(task => task.completed === true)}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab">
          <TaskTable
            tasks={tasks}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        </div>
      </div>
    </div>
  </div>
)

export default TaskList
