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
import IfNotAuthenticated from './Auth/IfNotAuthenticated'
import IfAuthenticated from './Auth/IfAuthenticated'
import UserAlbums from './UserAlbums'
import { google, github } from '../config/firebase'

import { fetchAlbums } from '../actions/albums'
import { fetchArtists } from '../actions/artists'
import { signInWithProvider, fetchUser, signOut } from '../actions/auth'

const App = (props) => {
  useEffect(() => {
    props.dispatch(fetchUser())
    props.dispatch(fetchAlbums())
    props.dispatch(fetchArtists())
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
                <IfAuthenticated>
                  <NavLink to="/my-albums" activeClassName="nav__item--active" className="nav__item">My albums</NavLink>
                </IfAuthenticated>
              </nav>
              <nav className="nav nav--account">
                {/* <IfAuthenticated>
                  <NavLink to="/signout" activeClassName="nav__item--active" className="nav__item">Sign out</NavLink>
                </IfAuthenticated> */}
                <IfAuthenticated>
                  <button className="nav__item" onClick={() => props.dispatch(signOut())}>Sign out</button>
                </IfAuthenticated>
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
              <Route path="/my-albums" component={UserAlbums} />
            </Switch>
          </main>
          <footer className="footer">
            <IfNotAuthenticated>
              <p className="footer__copy">
                <button className="btn" onClick={() => props.dispatch(signInWithProvider(google))}>Login in with Google</button>
                <button className="btn" onClick={() => props.dispatch(signInWithProvider(github))}>Log in with Github</button>
              </p>
            </IfNotAuthenticated>
            <p className="footer__copy">VinylBase is a project by <a href="https://brenmurrell.github.io">Bren Murrell</a></p>
          </footer>
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
    ui: globalState.ui,
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(App)
