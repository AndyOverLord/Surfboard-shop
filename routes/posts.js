var express = require('express');
var router = express.Router();

/* GET posts index /posts */
router.get('/', (req, res, next) => {
  res.send('respond with a posts index');
});
/* GET posts new /posts/new */
router.get('/new', (req, res, next) => {
  res.send('respond with a posts new');
});
/* Post posts create /posts */
router.post('/', (req, res, next) => {
  res.send('respond with a posts create');
});
/* GET posts show /posts/:id */
router.get('/:id', (req, res, next) => {
  res.send('respond with a posts show');
});
/* GET posts eidt /posts/:id */
router.get('/:id/edit', (req, res, next) => {
  res.send('respond with posts eidt');
});
/* PUT posts update /posts/:id */
router.put('/:id', (req, res, next) => {
  res.send('respond with a posts update');
});
/* DELETE posts delete /posts/:id */
router.delete('/:id', (req, res, next) => {
  res.send('respond with posts delete');
});

module.exports = router;
