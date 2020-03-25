var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Handlebars = require('hbs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

Handlebars.registerHelper('getRowColor', function(status) {
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
});

Handlebars.registerHelper('changeStatusName', function(status) {
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
});

module.exports = app;