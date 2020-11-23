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

// server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/albums', albumRoutes)
server.use('/api/v1/artists', artistRoutes)
server.use('/api/v1/changelog', changelogRoutes)
// server.use('/api/v1/pages', pagesRoutes) {/* handled by react now? */}

module.exports = server
