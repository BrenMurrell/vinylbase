import React from 'react'
import { connect } from 'react-redux'
import { IfAuthenticated, IfNotAuthenticated } from './Auth/Authenticated'
import AlbumListItem from './AlbumListItem'
const UserAlbums = (props) => {
  return (
    <>
      <IfAuthenticated>
        <h2>My albums</h2>
        <div className="albums">
          {props.userAlbums.map(userAlbum => {
            const userAlbumData = props.albums.filter(album => album.id === userAlbum.album_id)[0]
            return <AlbumListItem album={userAlbumData} key={userAlbumData.id} />
          })}
        </div>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <h2>Unauthorised</h2>
      </IfNotAuthenticated>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    userAlbums: globalState.userAlbums,
    albums: globalState.albums,
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(UserAlbums)
