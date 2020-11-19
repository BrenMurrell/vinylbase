import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchAlbum } from '../actions/albums'

class Album extends React.Component {
  state = {
    album: {}
  }
  componentDidMount () {
    const albumID = this.props.match.params.id
    this.props.dispatch(fetchAlbum(albumID))
  }
  render() {
    return (
      <div className="album">
        <h1>{this.props.album.album_name}</h1>
        <div className="album-media">
          <div className="album-media__block album-media__block--artwork">
              <img src={this.props.album.image} alt={`Album art for ${this.props.album.name}`} className="album__art" />

          </div>
          <div className="album-media__block album-media__block--media">
              <iframe src={`https://open.spotify.com/embed/album/${this.props.album.spotifyId}`} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
          <div className="album-media__block album-media__block--meta">
            <dl>
              <dt>Artist</dt>
              <dd>
                <Link to={`/artists/${this.props.album.artist}`}>
                  {this.props.album.artist_name}
                </Link>
              </dd>
              <dt>Condition</dt>
              <dd>{this.props.album.condition}</dd>
              <dt>Notes</dt>
              <dd>{this.props.album.notes}</dd>
            </dl>
            <p>
              <a href="/albums/6/edit" className="button button-primary">Edit this album</a>
            </p>
            <p>
              <a href="/albums/6/delete" className="button button-primary">Delete this album</a>
            </p>
          </div>
        </div>
        

        </div>
    )
  }
}

const mapStateToProps = (globalState) => {
  return {
    album: globalState.album
  }
}

export default connect(mapStateToProps)(Album)