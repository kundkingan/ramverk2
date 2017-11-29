let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('home', { title: 'Home' });
});

router.get('/reports', (req, res, next) => {
  res.render('reports', { title: 'Reports' });
});

router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});

router.get('/chat', (req, res, next) => {
  res.render('chat', { title: 'Chat' });
});

router.get('/booking-system', (req, res, next) => {
  res.render('booking-system', { title: 'Demo Booking System' });
});

module.exports = router;
