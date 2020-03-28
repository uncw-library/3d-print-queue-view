const createError = require('http-errors')
const express = require('express')
const handlebars = require('hbs')
const logger = require('morgan')
const favicon = require('serve-favicon')
const axios = require('axios')

const queueApi = 'https://digitalmakerspace.uncw.edu/api/v1/queue'
const imageApi = 'https://digitalmakerspace.uncw.edu/api/v1/image_rotation'

const app = express()
app.set('views', './app/views')
app.set('view engine', 'hbs')
app.use(express.static('./app/public'))
app.use(favicon('./app/public/seahawk.ico'))
app.use(logger('combined'))

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

// create a 404 page for anything that doesn't succeed in the above get functions
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

handlebars.registerHelper('getRowColor', (status) => {
  switch (status) {
    case 'Just Arrived':
      return 'danger'
    case 'Reviewed and Approved':
      return 'info'
    case 'Started Printing':
      return 'warning'
    case 'Ready for Pickup':
      return 'active'
  }
})

handlebars.registerHelper('changeStatusName', (status) => {
  switch (status) {
    case 'Just Arrived':
      return 'Submitted'
    case 'Reviewed and Approved':
      return 'Reviewed and Approved'
    case 'Started Printing':
      return 'Printing'
    case 'Ready for Pickup':
      return 'Ready for Pickup'
  }
})

module.exports = app
