import * as actionTypes from './action-types'

const initialState = {
  activeTabIndex: 0
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CONFIG_TAB: {
      return {
        ...state,
        activeTabIndex: action.payload.changeToTabIndex
      }
    }
    default:
      return state
  }
}

export default reducer
