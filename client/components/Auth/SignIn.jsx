import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { doLogin } from '../../actions/auth'

const SignIn = (props) => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleClick = () => {
    const { username, password } = form
    props.dispatch(doLogin(username, password))
  }

  return (
    <>
      <h2>Sign in</h2>
      <label htmlFor='username' className="form__label">
        <span className="form__label-title">Username</span>
        <input type='text'
          id='username'
          name='username'
          value={form.username}
          onChange={handleChange} />

      </label>
      <label htmlFor='password' className="form__label">
        <span className="form__label-title">Password</span>
        <input type='password'
          id='password'
          name='password'
          value={form.password}
          onChange={handleChange} />
      </label>
      <button type='button' className="btn" onClick={handleClick}>Sign in</button>

      {props.ui.redirectTo &&
        <Redirect to="/" />
      }
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth,
    ui: globalState.ui
  }
}

export default connect(mapStateToProps)(SignIn)
