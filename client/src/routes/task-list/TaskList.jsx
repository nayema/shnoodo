import React from 'react'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table'
import Button from 'material-ui/Button'
import DeleteIcon from 'material-ui-icons/Delete'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'

import './TaskList.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    width: '100%'
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing.unit,
    right: theme.spacing.unit * 2
  }
})

const Task = ({ task }) => {
  const taskClasses = classNames(
    { 'completedTask': task.completed }
  )
  return (
    <div className={taskClasses}>{task.name}, {task.category}</div>
  )
}

const TaskRow = ({ classes, task, removeTaskStarted, toggleTask }) => (
  <TableRow>
    <TableCell className="task" onClick={() => toggleTask(task.id)}>
      <Task task={task}/>
    </TableCell>
    <TableCell numeric>
      <Button
        variant="fab"
        mini
        color="secondary"
        aria-label="delete"
        className={classes.button}
        onClick={() => removeTaskStarted(task.id)}
      >
        <DeleteIcon/>
      </Button>
    </TableCell>
  </TableRow>
)

const TaskList = ({ classes, tasks, removeTaskStarted, toggleTask }) => (
  <div className={classes.root}>
    <Table className={classes.table}>
      <TableBody>
        {tasks.map(task =>
          <TaskRow
            key={task.id}
            classes={classes}
            task={task}
            removeTaskStarted={removeTaskStarted}
            toggleTask={toggleTask}/>)}
      </TableBody>
    </Table>
  </div>
)

export default withStyles(styles)(TaskList)
