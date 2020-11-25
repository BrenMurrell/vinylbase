import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router,
  NavLink,
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
    // props.dispatch(loadUi)
  }, [])
  return (
    <div className='wrapper'>
      {(props.ui.albumsLoaded && props.ui.artistsLoaded) && 
        <Router>
          <header className="header">
            <h1 className="app-title">VinylBase</h1>
            <nav className="main-nav">
              <NavLink exact to="/" activeClassName="main-nav__item--active" className="main-nav__item">Home</NavLink>
              <NavLink to="/albums" activeClassName="main-nav__item--active" className="main-nav__item">Albums</NavLink>
              <NavLink to="/artists" activeClassName="main-nav__item--active" className="main-nav__item">Artists</NavLink>
            </nav>
          </header>
          <main className="main">
            <Switch>
              <Route path="/albums" exact component={AlbumsList} />
              <Route path="/albums/add" exact component={AlbumAdd} />
              <Route path="/albums/:id"  component={Album} />
              <Route path="/artists" exact component={ArtistsList} />
              <Route path="/artists/add" exact component={ArtistAdd} />
              <Route path="/artists/:id" component={Artist} />
            </Switch>
          </main>
        </Router>
      } 
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
    toaster: globalState.toaster,
    ui: globalState.ui
  }
}

export default connect(mapStateToProps)(App)
