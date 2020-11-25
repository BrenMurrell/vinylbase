import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AlbumListItem from './AlbumListItem'

class AlbumsList extends React.Component {
  render() {
    return(
      <>
        <Link className="btn" to="/albums/add">Add an album</Link>
        <div className="albums">
          {this.props.albums.map(album => (
            <AlbumListItem album={album} key={album.id} />
          ))}
        </div>
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    albums: globalState.albums
  }
}

export default connect(mapStateToProps)(AlbumsList)