const knex = require('knex')
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

module.exports = {
  getContacts,
  saveContact
}

function getContacts(db = connection){
  return db('contacts').select()
}

function saveContact(contact, db = connection){
  return db('contacts')
  .insert({
    name: contact.name,
    email: contact.email,
    message: contact.message
  })
}
