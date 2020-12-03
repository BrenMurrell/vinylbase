const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

const albumRoutes = require('./routes/albumRoutes')
const artistRoutes = require('./routes/artistRoutes')
// const authRoutes = require('./routes/authRoutes')
const changelogRoutes = require('./routes/changelogRoutes')
const userAlbumRoutes = require('./routes/userAlbumsRoutes')

server.use('/api/v1/albums', albumRoutes)
server.use('/api/v1/artists', artistRoutes)
server.use('/api/v1/changelog', changelogRoutes)
server.use('/api/v1/useralbums', userAlbumRoutes)
// server.use('/api/v1/', authRoutes)

module.exports = server
