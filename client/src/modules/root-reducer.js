import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as tasks from './tasks'
import * as configurationTabs from './configuration-tabs'

export default combineReducers({
  routing: routerReducer,
  tasks: tasks.reducer,
  configurationTabs: configurationTabs.reducer
})
