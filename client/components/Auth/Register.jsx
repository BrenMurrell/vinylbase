import React, { useState } from 'react'

import { isAuthenticated, register } from 'authenticare/client'
// const baseUrl = `${process.env.API_BASE_URL}/auth`
const baseUrl = 'http://localhost:3000/api/v1/'

function Register (props) {
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
    return register({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
        return null
      })
  }

  return (
    <>
      <h2>Register</h2>
      <label htmlFor='username'>Username:</label>
      <input type='text'
        id='username'
        name='username'
        value={form.username}
        onChange={handleChange} />

      <label htmlFor='password'>Password:</label>
      <input type='password'
        id='password'
        name='password'
        value={form.password}
        onChange={handleChange} />

      <button type='button' className="btn" onClick={handleClick}>Register</button>
    </>
  )
}

export default Register
