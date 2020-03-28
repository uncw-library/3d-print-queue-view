const express = require('express')
const request = require('request')
const axios = require('axios')

const router = express.Router()

const queueApi = 'https://digitalmakerspace.uncw.edu/api/v1/queue'
const imageApi = 'https://digitalmakerspace.uncw.edu/api/v1/image_rotation'

router.get('/', (req, res, next) => {
  axios.get(queueApi)
    .then(data => res.render('index', {queue: data.data.data}))
    .catch(next)
})

router.get('/image_rotation', (req, res, next) => {
  axios.get(imageApi)
    .then(data => res.render('image_rotation', {images: data.data.data}))
    .catch(next)
})

module.exports = router
