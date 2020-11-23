const server = require('./server')
require('dotenv').config()

const PORT = process.env.PORT || 3000
console.log('can aws?', process.env.AWS_ACCESS_KEY_ID)

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
})
