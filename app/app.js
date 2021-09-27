const express = require('express')
const axios = require('axios')
const createError = require('http-errors')
const favicon = require('serve-favicon')
const logger = require('morgan')
const path = require('path')

require('./handlebars')

/*
globals
*/

const queueApi = 'https://digitalmakerspace.libapps.uncw.edu/api/v1/queue'
const imageApi = 'https://digitalmakerspace.libapps.uncw.edu/api/v1/image_rotation'

/*
app configuration
*/

const app = express()
app.locals.title = '3D Print queue'
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'seahawk.ico')))
app.use(logger('dev'))

/*
routes
*/

app.get('/', (req, res, next) => {
  axios.get(queueApi)
    .then(response => ({ queue: response.data.data }))
    .then(queueObject => res.render('index', queueObject))
    .catch(next)
})

app.get('/image_rotation', (req, res, next) => {
  axios.get(imageApi)
    .then(response => ({ images: response.data.data }))
    .then(images => res.render('image_rotation', images))
    .catch(next)
})

/*
 if the request doesn't match a route above,
 create a 404 error
*/

app.use((req, res, next) => {
  next(createError(404))
})

/*
error handler
*/

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.locals.message = err.message
  // send error details to view only in development
  res.locals.error = app.get('env') === 'development' ? err : {}
  console.error(err.stack)
  res.render('error')
})

module.exports = app
