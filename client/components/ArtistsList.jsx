import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchArtists } from '../actions/artists'
import { fetchAlbumsByArtist } from '../actions/albums'
class ArtistsList extends React.Component {

  componentDidMount() {
    // const artistId = this.props.match.params.id

    this.props.dispatch(fetchArtists())
    // this.props.dispatch(fetchAlbumsByArtist(artistId))
  }

  render() {
    return(
      <div>
        <h2>Artist list</h2>
        {this.props.artists.map(artist => (
          <p key={artist.id}>
            <Link to={`/artists/${artist.id}`}>
              {artist.name}
            </Link>
          </p>
        ))}
        <Link to={`/artist/add`}>Add a new artist</Link>
      </div>
    )
  }
}

const mapStateToProps = (globalState) => {
  return {
    artists: globalState.artists,
  }
}

export default connect(mapStateToProps)(ArtistsList)
