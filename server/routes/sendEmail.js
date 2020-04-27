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

  const msg = {
    to: process.env.SEND_EMAILS_TO,
    from: process.env.SEND_EMAILS_TO,
    replyTo: req.body.email,
    subject: `New website message from ${req.body.name}`,
    name: req.body.name,
    text: `
    You have a new message from ${req.body.name} (${req.body.email}) via your website.
    
    Here it is:
    ${req.body.text}
    `,
  };
  sgMail.send(msg)
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