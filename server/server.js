const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/fruits')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
const albumRoutes = require('./routes/albumRoutes')
const artistRoutes = require('./routes/artistRoutes')
const changelogRoutes = require('./routes/changelogRoutes')
const pagesRoutes = require('./routes/pagesRoutes')

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/albums', albumRoutes)
// server.use('/artists', artistRoutes)
// server.use('/changelog', changelogRoutes)
// server.use('/pages', pagesRoutes)

module.exports = server
