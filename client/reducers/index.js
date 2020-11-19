import { combineReducers } from 'redux'

import fruits from './fruits'
import albums from './albums'
import album from './album'
import artists from './artists'
import artist from './artist'

export default combineReducers({
  albums,
  album,
  artists,
  artist,
})
