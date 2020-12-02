import React from 'react'
import { connect } from 'react-redux'

const IfAdmin = (props) => {
  const adminEmails = ['bren.murrell@devacademy.co.nz', 'bren@moon.co.nz']
  const isAdmin = (props.auth.loggedIn === true && adminEmails.includes(props.auth.user.email))
  return isAdmin
    ? <>{ props.children }</>
    : null
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(IfAdmin)
