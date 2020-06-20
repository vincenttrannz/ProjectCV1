import request from 'superagent'

export function saveContact(contact){
  return request
  .post('/api/v1/contacts')
  .send(contact)
  .then(res => res.body)
}

export function sendEmail(email){
  return request
  .post('/api/v1/sendEmail')
  .send(email)
  .then(res => res.body)
}