// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const router = require('express').Router()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// WHAT I WANT
// const msg = {
//   to: 'tranhieunz@gmail.com',
//   from: 'tranhieunz@gmail.com',
//   subject: 'Sending Test',
//   name: 'Your name',
//   text: 'and easy to do anywhere, even with Node.js',
// };

// TEMPLATE FROM SENDGRID
// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
router.post('/', (req,res)=>{
  console.log(req.body)
  sgMail.send(req.body)
  .then(() => {}, error => {
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }
  })
  .then(()=>{
    res.json()
  })
});


module.exports = router;