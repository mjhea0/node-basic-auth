var express = require('express');
var router = express.Router();

var helpers = require('./helpers');


router.get('/', helpers.ensureAuthenticated, function(req, res, next) {
  res.render('index', {
    loggedIn: req.session.loggedIn,
    email: req.session.email
  });
});


module.exports = router;
