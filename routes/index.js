var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/reports', function(req, res, next) {
  res.render('reports', { title: 'Reports' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Home' });
});


module.exports = router;
