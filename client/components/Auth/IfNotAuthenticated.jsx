import React from 'react'
import { connect } from 'react-redux'

const IfNotAuthenticated = (props) => {
  const isAuthenticated = props.auth.loggedIn === true
  return !isAuthenticated
    ? <>{ props.children }</>
    : null
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(IfNotAuthenticated)
