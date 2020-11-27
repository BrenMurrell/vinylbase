import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Modal from './Modal'

import { setAlbum, removeAlbum } from '../actions/albums'
import { setToaster } from '../actions/toaster'

const Album = (props) => {
  const [modalVisible, setModalVisible] = useState(false)

  const albumID = parseInt(props.match.params.id)

  useEffect(() => {
    const albumArray = props.albums.filter(album => album.id === albumID)
    props.dispatch(setAlbum(albumArray[0]))
  }, [])

  const deleteThisAlbum = () => {
    props.dispatch(removeAlbum(props.album.id))
    setModalVisible(false)
    props.history.push('/albums')
    const toaster = {
      type: 'error',
      message: `${props.album.name} deleted`
    }
    props.dispatch(setToaster(toaster))
  }

  return (
    <div className="album">
      <h1>{props.album.name}</h1>
      <div className="album-media">
        <div className="album-media__block album-media__block--artwork">
          <img src={props.album.image} alt={`Album art for ${props.album.name}`} className="album__art" />

        </div>
        <div className="album-media__block album-media__block--media">
          <iframe src={`https://open.spotify.com/embed/album/${props.album.spotifyId}`} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="album-media__block album-media__block--meta">
          <dl>
            <dt>Artist</dt>
            <dd>
              <Link to={`/artists/${props.album.artist}`}>
                {/* TODO-BPM: fix so artist is a NAME not an ID */}
                {props.album.artist}
              </Link>
            </dd>
            <dt>Condition</dt>
            <dd>{props.album.condition}</dd>
            <dt>Notes</dt>
            <dd>{props.album.notes}</dd>
          </dl>
          <p>
            <a href="/albums/6/edit" className="button button-primary">Edit this album</a>
          </p>
          <p>
            <button className="btn btn-primary" onClick={() => setModalVisible(true)}>Delete this album</button>
          </p>
        </div>
      </div>

      { modalVisible && (
        <Modal title="Are you sure?">
          <p>Are you really sure you want to delete {props.album.name}?</p>
          <p>There is <strong><em>no</em></strong> undo</p>
          <div className="buttons">
            <button className="btn btn--warning" onClick={() => setModalVisible(false)}>Cancel</button>
            <button className="btn btn--warning" onClick={() => deleteThisAlbum()}>Delete</button>
          </div>
        </Modal>
      )}
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    album: globalState.album,
    albums: globalState.albums
  }
}

export default connect(mapStateToProps)(Album)
