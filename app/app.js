const createError = require('http-errors')
const express = require('express')
const handlebars = require('hbs')
const logger = require('morgan')
const favicon = require('serve-favicon');
const indexRouter = require('./routes/index')

const app = express()

app.set('views', './app/views')
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('./app/public'))
app.use(favicon('./app/public/seahawk.ico'))
app.use(logger('combined'))

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
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
