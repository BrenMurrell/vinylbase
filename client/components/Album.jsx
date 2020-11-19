import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbum } from '../actions'

class Album extends React.Component {
  state = {
    album: {}
  }
  componentDidMount () {
    var albumID = this.props.match.params.id
    this.props.dispatch(fetchAlbum(albumID))
  }
  render() {
    return (
      <div class="album">
        <h1>{this.props.album.name}</h1>
        <div class="album-media">
          <div class="album-media__block album-media__block--artwork">
              <img src={this.props.album.image} alt={`Album art for ${this.props.album.name}`} class="album__art" />

          </div>
          <div class="album-media__block album-media__block--media">
              <iframe src={`https://open.spotify.com/embed/album/${this.props.album.spotifyId}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
          <div class="album-media__block album-media__block--meta">
            <dl>
              <dt>Artist</dt>
              <dd>
                <a href="/artists/2">
                  The Beatles
                </a>
              </dd>
              <dt>Condition</dt>
              <dd>{this.props.album.condition}</dd>
              <dt>Notes</dt>
              <dd>{this.props.album.notes}</dd>
            </dl>
            <p>
              <a href="/albums/6/edit" class="button button-primary">Edit this album</a>
            </p>
            <p>
              <a href="/albums/6/delete" class="button button-primary">Delete this album</a>
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