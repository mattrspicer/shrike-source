var mongoose = require('mongoose');
var TrialUsers = mongoose.model('TrialUsers');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('home');
});

// router.get('/trialusers', function(req, res, next) {
//   TrialUsers.find(function(err, events){
//     if(err){ return next(err); }
//     res.json(events);
//   });
// });

router.post('/trialusers', function(req, res) {
  var newUser = new TrialUsers(req.body);
  newUser.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.jsonp(newUser);
    }
  });
});

module.exports = router;