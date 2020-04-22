import request from 'superagent'

const contactUrl = 'http://localhost:3000/api/v1/contacts'

export function saveContact(contact){
  return request
  .post(contactUrl)
  .send(contact)
  .then(res => res.body, console.log(contact))
}