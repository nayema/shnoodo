import * as actionTypes from './action-types'

export const changeConfigTab = (changeToTabIndex) => ({
  type: actionTypes.CHANGE_CONFIG_TAB,
  payload: {
    changeToTabIndex
  }
})
