const express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://digitalmakerspace.uncw.edu/api/v1/queue', { json: true }, (err, httpres, body) => {
    if (err) { res.send('Error.') }
    res.render('index', { queue: body.data });
  });
});

/* GET /image_rotation page */
router.get('/image_rotation', function(req, res, next) {
  request('https://digitalmakerspace.uncw.edu/api/v1/image_rotation', { json: true }, (err, httpres, body) => {
    if (err) { res.send('Error.') }
    res.render('image_rotation', { images: body.data });
  });
});


module.exports = router;
