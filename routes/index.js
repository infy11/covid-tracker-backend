var express = require('express');
var router = express.Router();
var getCovidData = require('../services/covid');
/* GET home page. */
router.get('/getCovidData', function(req, res, next) {
  getCovidData().then(response=>{
    res.json(response);
  })

});

module.exports = router;
