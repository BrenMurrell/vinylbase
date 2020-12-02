import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import IfNotAuthenticated from './Auth/IfNotAuthenticated'
import IfAdmin from './Auth/IfAdmin'

class ArtistsList extends React.Component {
  render () {
    return (
      <div>
        <h2>Artist list</h2>
        <IfAdmin>
          <Link className="btn" to={'/artists/add'}>Add a new artist</Link>
        </IfAdmin>
        {this.props.artists.map(artist => (
          <p key={artist.id}>
            <Link to={`/artists/${artist.id}`}>
              {artist.name}
            </Link>
          </p>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (globalState) => {
  return {
    artists: globalState.artists
  }
}

export default connect(mapStateToProps)(ArtistsList)
