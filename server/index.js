if (process.env.NODE_ENV != 'production') {
  const envConfig = require('dotenv').config()
  if(envConfig.error) throw envConfig.error
}

const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', PORT)
})
