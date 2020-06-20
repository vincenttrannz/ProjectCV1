const path = require('path')
const express = require('express')
const sendEmail = require('./routes/sendEmail')
const contacts = require('./routes/contacts')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/sendEmail', sendEmail)
server.use('/api/v1/contacts', contacts)

module.exports = server
