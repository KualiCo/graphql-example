'use strict'

const http = require('http')
const app = require('./app')

const PORT = process.env.PORT || '8000'
const server = http.createServer(app)

server
  .listen(PORT)
  .on('listening', () => console.log(`Server started on port ${PORT}`))
