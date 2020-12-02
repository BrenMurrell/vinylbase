import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import AlbumListItem from './AlbumListItem'
import Modal from './Modal'
import IfAdmin from './Auth/IfAdmin'

import { setArtistAlbums } from '../actions/albums'
import { setArtist, removeArtist } from '../actions/artists'
import { setToaster } from '../actions/toaster'

const Artist = (props) => {
  const artistId = parseInt(props.match.params.id)

  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const artistArray = props.artists.filter(artist => artist.id === artistId)
    props.dispatch(setArtist(artistArray[0]))
    props.dispatch(setArtistAlbums(props.albums.filter(album => album.artist === artistId)))
  }, [])

  const deleteThisArtist = () => {
    props.dispatch(removeArtist(props.artist.id))
    setModalVisible(false)
    props.history.push('/artists')
    const toaster = {
      type: 'error',
      message: `${props.artist.name} deleted`
    }
    props.dispatch(setToaster(toaster))
  }

  return (
    <div>
      <h2>{props.artist.name}</h2>
      <IfAdmin>
        <button className="btn btn--warning" onClick={() => setModalVisible(true)}>Delete this artist</button>
      </IfAdmin>
      <div className="albums">
        {props.artistAlbums.map(album =>
          <AlbumListItem key={album.id} album={album} />
        )}
        { modalVisible && (
          <IfAdmin>
            <Modal title="Are you sure?">
              <p>Are you really sure you want to delete {props.artist.name}?</p>
              <p>Note: this will NOT delete their albums (yet). Also there is <strong><em>no</em></strong> undo</p>
              <div className="buttons">
                <button className="btn btn--green" onClick={() => setModalVisible(false)}>Cancel</button>
                <button className="btn btn--warning" onClick={() => deleteThisArtist()}>Delete</button>
              </div>
            </Modal>
          </IfAdmin>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    albums: globalState.albums,
    artist: globalState.artist,
    artists: globalState.artists,
    artistAlbums: globalState.artistAlbums
  }
}

export default connect(mapStateToProps)(Artist)
