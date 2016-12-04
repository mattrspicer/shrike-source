var express = require('express');
var router = express.Router();

/* GET users listing. - not used by Spicer's version of the shrike mounts site */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
