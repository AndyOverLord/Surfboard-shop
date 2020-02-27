var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',  (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET register /register. */
router.get('/register', (req, res, next) => {
  res.send('respond with GET /register');
});
/* Post register /register. */
router.post('/register', (req, res, next) => {
  res.send('respond with POST /register');
});

/* GET login /login. */
router.get('/login', (req, res, next) => {
  res.send('respond with GET /login');
});
/* Post login /login. */
router.post('/login', (req, res, next) => {
  res.send('respond with POST /login');
});

/* GET profile /profile. */
router.get('/profile', (req, res, next) => {
  res.send('respond with GET /profile');
});
/* Put profile /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('respond with PUT /profile/:user_id');
});

/* GET forgot /forgot. */
router.get('/forgot', (req, res, next) => {
  res.send('respond with GET /forgot');
});
/* Put forgot /forgot/:token */
router.put('/forgot/:token', (req, res, next) => {
  res.send('respond with PUT /forgot/:token');
});

/* GET reset /reset/:token. */
router.get('/reset/:token', (req, res, next) => {
  res.send('respond with GET /reset/:token');
});
/* Put reset /reset/:token */
router.put('/reset/:token', (req, res, next) => {
  res.send('respond with PUT /reset/:token');
});

module.exports = router;
