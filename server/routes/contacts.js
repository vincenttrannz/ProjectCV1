const express = require('express')
const router = express.Router()
const db = require('../../data/db')

router.get('/', (req, res) => {
  db.getContacts()
    .then((contacts) => {
      res.json(contacts)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req,res)=>{
  console.log(req.body)
  db.saveContact(req.body)
  .then(()=>{
    res.json({})
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

module.exports = router