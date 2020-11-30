import request from 'superagent'

const rootUrl = '/api/v1/albums'

export function getAlbums () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}

export function getAlbum (id) {
  return request.get(rootUrl + '/' + id)
    .then(res => {
      return res.body
    })
}

export function getAlbumsByArtist (artistId) {
  return request.get(rootUrl + '/' + artistId + '/albums')
    .then(res => {
      return res.body
    })
}

export function addAlbumArt (formData) {
  return request.post(rootUrl + '/upload')
    .send(formData)
    .then(res => {
      return res.text
    })
}

export function addAlbumData (formData) {
  return request.post(rootUrl)
    .send(formData)
    .then(res => {
      return res.body
    })
}

export function deleteAlbum (albumId) {
  return request.delete(rootUrl + '/' + albumId)
    // .send(albumId)
    .then(res => {
      return res.body
    })
}
