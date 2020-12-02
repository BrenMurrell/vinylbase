import React from 'react'
import { connect } from 'react-redux'

// import { isAuthenticated } from 'authenticare/client'

const IfAuthenticated = (props) => {
  const isAuthenticated = props.auth.loggedIn === true
  return isAuthenticated
    ? <>{ props.children }</>
    : null
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(IfAuthenticated)
