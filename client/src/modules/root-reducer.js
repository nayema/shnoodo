import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as tasks from './task-list'
import * as configurationTabs from './configuration-tabs'

export default combineReducers({
  routing: routerReducer,
  taskList: tasks.reducer,
  configurationTabs: configurationTabs.reducer
})
