import { combineReducers } from 'redux'

import albums from './albums'
import album from './album'
import artists from './artists'
import artist from './artist'
import artistAlbums from './artistAlbums'
import auth from './auth'
import toaster from './toaster'
import ui from './ui'
import userAlbums from './userAlbums'

export default combineReducers({
  albums,
  album,
  artists,
  artist,
  artistAlbums,
  auth,
  toaster,
  ui,
  userAlbums
})
