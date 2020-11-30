import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  HashRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

import AlbumsList from './AlbumsList'
import Album from './Album'
import ArtistsList from './ArtistsList'
import Artist from './Artist'
import ArtistAdd from './ArtistAdd'
import Toaster from './Toaster'
import AlbumAdd from './AlbumAdd'
import { IfAuthenticated, IfNotAuthenticated } from './Auth/Authenticated'
import Register from './Auth/Register'
import SignIn from './Auth/SignIn'
import SignOut from './Auth/SignOut'

import { fetchAlbums } from '../actions/albums'
import { fetchArtists } from '../actions/artists'
import { checkAuth } from '../actions/auth'

const App = (props) => {
  useEffect(() => {
    // console.log('albums?', props.albums == '')
    props.dispatch(fetchAlbums())
    props.dispatch(fetchArtists())
    props.dispatch(checkAuth())
    // props.dispatch(loadUi)
  }, [])
  return (
    <div className='wrapper'>
      {(props.ui.albumsLoaded && props.ui.artistsLoaded) &&
        <Router>
          <header className="header">
            <h1 className="app-title">VinylBase</h1>
            <div className="nav__wrapper">
              <nav className="nav nav--main">
                <NavLink exact to="/" activeClassName="nav__item--active" className="nav__item">Home</NavLink>
                <NavLink to="/albums" activeClassName="nav__item--active" className="nav__item">Albums</NavLink>
                <NavLink to="/artists" activeClassName="nav__item--active" className="nav__item">Artists</NavLink>
              </nav>
              <nav className="nav nav--account">
                <IfAuthenticated>
                  <NavLink to="/signout" activeClassName="nav__item--active" className="nav__item">Sign out</NavLink>
                </IfAuthenticated>
                <IfNotAuthenticated>
                  <NavLink to="/signin" activeClassName="nav__item--active" className="nav__item">Sign in</NavLink>
                </IfNotAuthenticated>
              </nav>
            </div>
          </header>
          <main className="main">
            <Switch>
              <Route path="/albums" exact component={AlbumsList} />
              <Route path="/albums/add" exact component={AlbumAdd} />
              <Route path="/albums/:id" component={Album} />
              <Route path="/artists" exact component={ArtistsList} />
              <Route path="/artists/add" exact component={ArtistAdd} />
              <Route path="/artists/:id" component={Artist} />
              <Route path='/register' component={Register} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signout' component={SignOut} />
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
    albums: globalState.albums,
    artists: globalState.artists,
    toaster: globalState.toaster,
    ui: globalState.ui
  }
}

export default connect(mapStateToProps)(App)
