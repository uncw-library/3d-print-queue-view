const express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://makerspace.uncw.edu/api/v1/queue', { json: true }, (err, httpres, body) => {
    if (err) { res.send('Error.') }
    res.render('index', { queue: body.data });
  });
});

module.exports = router;
