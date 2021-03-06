import React from 'react'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

import Title from './Title'
import Authentication from './auth/AuthenticationContainer'
import AddTaskBar from './add-task-bar/AddTaskBarContainer'
import TaskList from './task-list/TaskListContainer'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  container: {
    justifyContent: 'center'
  },
  content: {
    maxWidth: '960px'
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

const App = ({ classes }) => (
  <div className={classes.root}>
    <Title/>
    <Authentication/>
    <Grid container className={classes.container} spacing={24}>
      <Grid item xs className={classes.content}>
        <Paper className={classes.paper}>
          <AddTaskBar/>
          <TaskList/>
        </Paper>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(App)
