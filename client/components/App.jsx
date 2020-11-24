import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router,
  Link,
  Route,
  Switch,
  useHistory } from 'react-router-dom'



import AlbumsList from './AlbumsList'
import Album from './Album'
import ArtistsList from './ArtistsList'
import Artist from './Artist'
import ArtistAdd from './ArtistAdd'
import Toaster from './Toaster'
import AlbumAdd from './AlbumAdd'

import { fetchAlbums } from '../actions/albums'
import { fetchArtists } from '../actions/artists'


const App = (props) => {
  useEffect(() => {
    // console.log('albums?', props.albums == '')
    props.dispatch(fetchAlbums())
    props.dispatch(fetchArtists())
  }, [])
  return (
    <div className='wrapper'>
      <h1>VinylBase</h1>
      <Router>
        <Link to="/">Home</Link>{' | '}
        <Link to="/albums">Albums</Link>{' | '}
        <Link to="/artists">Artists</Link>
        <Switch>
          {/* <Route path="/" component={Home} /> */}
          <Route path="/albums" exact component={AlbumsList} />
          <Route path="/albums/add" exact component={AlbumAdd} />
          <Route path="/albums/:id"  component={Album} />
          <Route path="/artists" exact component={ArtistsList} />
          <Route path="/artist/add" exact component={ArtistAdd} />
          <Route path="/artists/:id" component={Artist} />
        </Switch>
      </Router>
      {props.toaster.message && (
        <Toaster />
      )}
    </div>
  )
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits,
    albums: globalState.albums,
    artists: globalState.artists,
    toaster: globalState.toaster
  }
}

export default connect(mapStateToProps)(App)
