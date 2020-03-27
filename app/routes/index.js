const express = require('express')
const request = require('request')
const axios = require('axios')

const router = express.Router()

const homepage = 'https://digitalmakerspace.uncw.edu/api/v1/queue'
const imgpage = 'https://digitalmakerspace.uncw.edu/api/v1/image_rotation'

router.get('/', (req, res) => {
  axios.get(homepage)
    .then(data => res.render('index', {queue: data.data.data}))
    .catch(err => res.sendStatus(404))
})

// router.get('/', (req, res) => {
//   request(homepage, { json: true }, (err, httpres, body) => {
//     if (err) { res.send('Error.') }
//     res.render('index', { queue: body.data })
//   })
// })

router.get('/image_rotation', (req, res) => {
  request(imgpage, { json: true }, (err, httpres, body) => {
    if (err) { res.send('Error.') }
    res.render('image_rotation', { images: body.data })
  })
})

module.exports = router
