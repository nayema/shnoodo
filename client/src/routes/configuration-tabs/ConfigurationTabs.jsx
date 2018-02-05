import React from 'react'
import { withStyles } from 'material-ui/styles'
import Tabs, { Tab } from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'

import TaskList from './task-list/TaskList'

const TabContainer = (props) => (
  <Typography component="div">
    {props.children}
  </Typography>
)

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 2
  },
  tab: {
    maxWidth: '-webkit-fill-available'
  }
})

const ConfigurationTabs = ({ classes, activeTabIndex, changeConfigTab, tasks, completeTask, deleteTask }) => (
  <div className={classes.root}>
    <Tabs
      value={activeTabIndex}
      onChange={(_, value) => changeConfigTab(value)}
      indicatorColor="primary"
      textColor="primary"
      fullWidth
    >
      <Tab className={classes.tab} label="Incomplete Tasks"/>
      <Tab className={classes.tab} label="Completed Tasks"/>
      <Tab className={classes.tab} label="All Tasks"/>
    </Tabs>
    {/*TODO: EXTRACT SELECTORS FOR RACH TASKLIST FILTER BELOW*/}
    {activeTabIndex === 0 && <TabContainer>
      <TaskList
        tasks={tasks.filter(task => task.completed !== true)}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </TabContainer>}
    {activeTabIndex === 1 && <TabContainer>
      <TaskList
        tasks={tasks.filter(task => task.completed === true)}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </TabContainer>}
    {activeTabIndex === 2 && <TabContainer>
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </TabContainer>}
  </div>
)
export default withStyles(styles)(ConfigurationTabs)
