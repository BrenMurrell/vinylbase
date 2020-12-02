import React, { useEffect, useState } from 'react'
import { addAlbum } from '../actions/albums'
import { fetchArtists } from '../actions/artists'

import { connect } from 'react-redux'
import IfAdmin from './Auth/IfAdmin'

const AlbumAdd = (props) => {
  const [albumArt, setAlbumArt] = useState(null)
  const [albumTitle, setAlbumTitle] = useState('')
  const [albumArtist, setAlbumArtist] = useState('')
  const [albumCondition, setAlbumCondition] = useState('')
  const [albumNotes, setAlbumNotes] = useState('')
  const [albumSpotifyId, setAlbumSpotifyId] = useState('')

  useEffect(() => {
    props.dispatch(fetchArtists())
  }, [])

  const onChangeFile = (e) => {
    setAlbumArt(e.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // handle image first
    const formImage = new FormData()
    formImage.append('album_art', albumArt)

    // handle other form data (album art added in action)
    const formData = {
      name: albumTitle,
      artist: albumArtist,
      condition: albumCondition,
      notes: albumNotes,
      spotifyId: albumSpotifyId
    }

    props.dispatch(addAlbum(formImage, formData))
  }

  return (
    <div className="album-add">
      <IfAdmin>
        <form encType='multipart/form-data' onSubmit={handleSubmit}>
          <label className="form__label" htmlFor="album_title">
            <span className="form__label-title">Album name</span>
            <input type="text" name="album_title" onChange={(e) => setAlbumTitle(e.target.value)} />
          </label>

          <label className="form__label" htmlFor="album_artist">
            <span className="form__label-title">Artist</span>
            <select name="album_arits" onChange={(e) => setAlbumArtist(e.target.value)}>
              <option value="">Select one...</option>
              {props.artists.map(artist => {
                return <option key={artist.id} value={artist.id}>{artist.name}</option>
              })}
            </select>
          </label>

          <label className="form__label" htmlFor="album_condition">
            <span className="form__label-title">Condition</span>
            <input type="text" name="album_condition" onChange={(e) => setAlbumCondition(e.target.value)} />
          </label>

          <label className="form__label" htmlFor="album_notes">
            <span className="form__label-title">Notes</span>
            <input type="text" name="album_notes" onChange={(e) => setAlbumNotes(e.target.value)} />
          </label>

          <label className="form__label" htmlFor="album_spotify_id">
            <span className="form__label-title">Spotify ID</span>
            <input type="text" name="album_spotify_id" onChange={(e) => setAlbumSpotifyId(e.target.value)} />
          </label>

          <label className="form__label" htmlFor="album_art">
            <span className="form__label-title">Album artwork (200x200ish)</span>
            <input type="file" name="album_art" onChange={onChangeFile} />
          </label>

          <button type="submit" className="btn">Submit</button>
        </form>
      </IfAdmin>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    artists: globalState.artists
  }
}

export default connect(mapStateToProps)(AlbumAdd)
