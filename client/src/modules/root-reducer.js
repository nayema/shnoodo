import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as auth from './auth'
import * as tasks from './tasks'

export default combineReducers({
  routing: routerReducer,
  auth: auth.reducer,
  tasks: tasks.reducer
})
