import React from 'react'
import Header from './Header'
import TaskList from './task-list/TaskListContainer'

const App = () => (
  <div className="container-fluid">
    <Header/>
    <TaskList/>
  </div>
)

export default App
