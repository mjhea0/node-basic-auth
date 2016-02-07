var express = require('express');
var router = express.Router();

var helpers = require('./helpers');


router.get('/', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('index', {userID: req.session.id});
});


module.exports = router;
