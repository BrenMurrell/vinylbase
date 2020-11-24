import React from 'react'
import { connect } from 'react-redux'

import { fetchAlbums } from '../actions/albums'

import AlbumListItem from './AlbumListItem'

class AlbumsList extends React.Component {
  componentDidMount() {
    if(this.props.albums == '') {
      console.log('fetching albums from albums')
      this.props.dispatch(fetchAlbums())
      // props.dispatch(fetchAlbums())
    }
  }
  render() {
    return(
      <div className="albums">
        {this.props.albums.map(album => (
          <AlbumListItem album={album} key={album.id} />
        ))}
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    albums: globalState.albums
  }
}

export default connect(mapStateToProps)(AlbumsList)