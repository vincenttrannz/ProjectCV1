import request from 'superagent'

const baseUrl = 'http://localhost:3000/api/v1/sendEmail'

export function sendEmail(email){
  return request
  .post(baseUrl)
  .send(email)
  .then(res => res.body)
}