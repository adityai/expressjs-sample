var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  map = { "hello": "world" }
  res.json(map);
});

module.exports = router;
