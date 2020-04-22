// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const router = require('express').Router()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

// const msg = {
//   to: 'tranhieunz@gmail.com',
//   from: 'tranhieunz@gmail.com',
//   subject: 'Sending Test',
//   name: 'Your name',
//   text: 'and easy to do anywhere, even with Node.js',
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