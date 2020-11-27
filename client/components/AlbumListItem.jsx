import React from 'react'
import { Link } from 'react-router-dom'

const AlbumListItem = (props) => {
  const { album } = props

  return (
    <div className="album-tile">
      <Link to={`/albums/${album.id}`} className="album__art-link">
        <img src={album.image} alt="Album art for Dark Side of the Moon" className="album__art" />
      </Link>
      <p className="album-tile__name"><Link to={`/albums/${album.id}`}>{album.name}</Link></p>
    </div>
  )
}

export default AlbumListItem
