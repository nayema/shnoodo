import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as tasks from './tasks'

export default combineReducers({
  routing: routerReducer,
  tasks: tasks.reducer,
})
