const express = require('express')
const axios = require('axios')
const createError = require('http-errors')
const logger = require('morgan')
const favicon = require('serve-favicon')
const handlebars = require('./handlebars')

/*
global variables
*/

const queueApi = 'https://digitalmakerspace.uncw.edu/api/v1/queue'
const imageApi = 'https://digitalmakerspace.uncw.edu/api/v1/image_rotation'

/*
app configuration
*/

const app = express()
app.set('view engine', 'hbs')
app.set('views', './app/views')
app.use(express.static('./app/public'))
app.use(favicon('./app/public/seahawk.ico'))
app.use(logger('combined'))

/*
routes
*/

app.get('/', (req, res, next) => {
  axios.get(queueApi)
    .then(data => res.render('index', { queue: data.data.data }))
    .catch(next)
})

app.get('/image_rotation', (req, res, next) => {
  axios.get(imageApi)
    .then(data => res.render('image_rotation', { images: data.data.data }))
    .catch(next)
})

// create a 404 page if the request doesn't succeed in the routes above

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  // send error details to view only in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
