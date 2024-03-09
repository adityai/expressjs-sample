var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  axios.get("https://query1.finance.yahoo.com/v8/finance/chart/AAPL").then(response => res.json(response.data));
});

module.exports = router;
