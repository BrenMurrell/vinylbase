import request from 'superagent'

const rootUrl = '/api/v1'

export function getAlbums () {
  return request.get(rootUrl + '/albums')
    .then(res => {
      return res.body
    })
}

export function getAlbum (id) {
  return request.get(rootUrl + '/albums/' + id)
    .then(res => {
      return res.body
    })
}

export function getAlbumsByArtist (artistId) {
  return request.get(rootUrl + '/artists/' + artistId + '/albums')
    .then(res => {
      return res.body
    })
}

export function addAlbumArt (formData) {
  return request.post(rootUrl + '/albums/upload')
    .send(formData)
    .then(res => {
      return res.text
    })
}

export function addAlbumData (formData) {
  return request.post(rootUrl + '/albums')
    .send(formData)
    .then(res => {
      return res.body
    })
}

export function deleteAlbum (albumId) {
  return request.delete(rootUrl + '/albums/' + albumId)
    // .send(albumId)
    .then(res => {
      return res.body
    })
}
