import React from 'react'
import KeyPress from 'react-keypress'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/Menu/MenuItem'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
})

const categories = ['Personal', 'Work', 'Hobbies', 'Errands']

const TaskBar = ({ classes, newTaskName, newTaskCategory, addTask, changeNewTaskName, changeNewTaskCategory }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs>
        <TextField
          id="full-width"
          label="Task"
          helperText="Add your task here"
          fullWidth
          margin="normal"
          onChange={(e) => changeNewTaskName(e.target.value)}
          onKeyPress={KeyPress('enter', (e) => addTask(e.target.value, newTaskCategory))}
          value={newTaskName}
        />
      </Grid>
      <Grid item xs>
        <TextField
          id="select-currency"
          select
          label="Select"
          className={classes.textField}
          value={newTaskCategory}
          onChange={(e) => changeNewTaskCategory(e.target.value)}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your category"
          margin="normal"
        >
          {categories.map(category => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item md>
        <Button fab mini color="primary" aria-label="add" className={classes.button}
          onClick={() => {addTask(newTaskName, newTaskCategory)}}>
          <AddIcon/>
        </Button>
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(TaskBar)
