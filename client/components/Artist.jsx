import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AlbumListItem from './AlbumListItem'
import Modal from './Modal'

import { fetchAlbumsByArtist } from '../actions/albums'
import { fetchArtist, removeArtist } from '../actions/artists'
import { setToaster, clearToaster } from '../actions/toaster'

const Artist = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  
  useEffect(() => {
    const artistId = props.match.params.id
    props.dispatch(fetchAlbumsByArtist(artistId))
    props.dispatch(fetchArtist(artistId))
  }, [])

  const deleteThisArtist = () => {
    props.dispatch(removeArtist(props.artist.id))
    setModalVisible(false)
    props.history.push('/artists')
    const toaster = {
      type: 'error',
      message: `${props.artist.name} deleted`,
    }
    props.dispatch(setToaster(toaster))
    setTimeout(() => {
      props.dispatch(clearToaster())
    }, 5000);
  }


  return(
    <div>
      <h2>{props.artist.name}</h2>
      <button className="btn" onClick={() => setModalVisible(true)}>Delete this artist</button>
      <div className="albums">
        {props.albums.map(album => (
          <AlbumListItem key={album.id} album={album} />
        ))}
        { modalVisible && (
          <Modal title="Are you sure?">
            <p>Are you really sure you want to delete {props.artist.name}?</p>
            <p>There is <strong><em>no</em></strong> undo</p>
            <div className="buttons">
              <button className="btn btn--warning" onClick={() => setModalVisible(false)}>Cancel</button>
              <button className="btn btn--warning" onClick={() => deleteThisArtist()}>Delete</button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    albums: globalState.albums,
    artist: globalState.artist
  }
}

export default connect(mapStateToProps)(Artist)
