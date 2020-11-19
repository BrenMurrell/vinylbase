import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router,
  Link,
  Route,
  Switch, } from 'react-router-dom'


import { fetchFruits, fetchAlbums, fetchArtists } from '../actions'

import AlbumsList from './AlbumsList'
import Album from './Album'

export class App extends React.Component {
  state = {
    fruits: [],
    albums: []
  }

  componentDidMount () {
    // this.props.dispatch(fechFruits())

    this.props.dispatch(fetchAlbums())
  }

  render () {
    return (
      <div className='wrapper'>
        <h1>Fullstack Boilerplate - with Albums!</h1>
        <Router>
          <Link to="/">Home</Link>{' | '}
          <Link to="/albums">Albums</Link>
          <Switch>
            {/* <Route path="/" component={Home} /> */}
            <Route path="/albums" exact component={AlbumsList} />
            <Route path="/albums/:id"  component={Album} />
          </Switch>
        </Router>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits,
    albums: globalState.albums
  }
}

export default connect(mapStateToProps)(App)
