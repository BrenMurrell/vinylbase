import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AlbumListItem from './AlbumListItem'

import { fetchAlbumsByArtist } from '../actions/albums'
import { fetchArtist } from '../actions/artists'

class Artist extends React.Component {

  componentDidMount() {
    const artistId = this.props.match.params.id
    // this.props.dispatch(fetchArtists())
    this.props.dispatch(fetchAlbumsByArtist(artistId))
    this.props.dispatch(fetchArtist(artistId))
  }

  render() {
    return(
      <div>
        <h2>Artist</h2>
        <div className="albums">
          {this.props.albums.map(album => (
            <AlbumListItem album={album} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (globalState) => {
  return {
    albums: globalState.albums,
    artist: globalState.artist
  }
}

export default connect(mapStateToProps)(Artist)
