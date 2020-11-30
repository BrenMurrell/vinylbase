import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { doLogout } from '../../actions/auth'

import { IfNotAuthenticated } from './Authenticated'

const SignOut = (props) => {
  useEffect(() => {
    props.dispatch(doLogout())
  }, [])

  return (
    <>
      <IfNotAuthenticated>
        <Redirect to="/" />
      </IfNotAuthenticated>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(SignOut)
