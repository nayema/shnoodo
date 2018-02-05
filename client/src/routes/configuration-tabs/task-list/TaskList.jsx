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
    { 'completedTask': task.completed === true }
  )
  return (
    <div className={taskClasses}>{task.name}</div>
  )
}

const TaskRow = ({ classes, task, deleteTask, completeTask }) => (
  <TableRow>
    <TableCell className="task" onClick={() => completeTask(task.name)}>
      <Task task={task}/>
    </TableCell>
    <TableCell numeric>
      <Button fab mini color="accent" aria-label="delete" className={classes.button}
        onClick={() => {deleteTask(task.name)}}>
        <DeleteIcon/>
      </Button>
    </TableCell>
  </TableRow>
)

const TaskList = ({ classes, tasks, deleteTask, completeTask }) => (
  <div className={classes.root}>
    <Table className={classes.table}>
      <TableBody>
        {tasks.map(task =>
          <TaskRow
            key={task.name}
            classes={classes}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}/>)}
      </TableBody>
    </Table>
  </div>
)

export default withStyles(styles)(TaskList)
