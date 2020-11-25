import React, { useState } from 'react'
import { insertArtist } from '../actions/artists'
import { connect } from 'react-redux'

import { setToaster, clearToaster } from '../actions/toaster'

const ArtistAdd = (props) => {
  const [name, setName] = useState('')
  
  const onChange = (event) => {
    setName(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const artist = { name: name }
    props.dispatch(insertArtist(artist))
    props.history.push('/artists')

    const toaster = {
      type: 'standard',
      message: `${name} added`,
    }
    props.dispatch(setToaster(toaster))
  }

  return (
    <div>
      <h2>Add a new artist</h2>
      <form onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="name">
          <span className="form__label-title">Artist name</span>
          <input type="text" name="name" value={name} onChange={onChange} required />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default connect()(ArtistAdd)