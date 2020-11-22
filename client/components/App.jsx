import React from 'react'
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

export class App extends React.Component {

  render () {
    return (
      <div className='wrapper'>
        <h1>Fullstack Boilerplate - with Albums!</h1>
        <Router>
          <Link to="/">Home</Link>{' | '}
          <Link to="/albums">Albums</Link>{' | '}
          <Link to="/artists">Artists</Link>
          <Switch>
            {/* <Route path="/" component={Home} /> */}
            <Route path="/albums" exact component={AlbumsList} />
            <Route path="/albums/:id"  component={Album} />
            <Route path="/artists" exact component={ArtistsList} />
            <Route path="/artist/add" exact component={ArtistAdd} />
            <Route path="/artists/:id" component={Artist} />
          </Switch>
        </Router>
        {this.props.toaster.message && (
          <Toaster />
        )}
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits,
    albums: globalState.albums,
    toaster: globalState.toaster
  }
}

export default connect(mapStateToProps)(App)
