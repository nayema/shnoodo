import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as auth from '../../modules/auth'
import Authentication from './Authentication'

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    loginRequestStarted: auth.actionCreators.loginRequestStarted,
    logoutRequestStarted: auth.actionCreators.logoutRequestStarted
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)
