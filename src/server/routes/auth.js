var express = require('express');
var router = express.Router();

var User = require('../models/user');
var helpers = require('./helpers');


router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', function(req, res, next) {
  var newUser = {
    email: req.body.email,
    password: req.body.password
  };
  User.create(newUser, function(err, user) {
    if (user) {
      req.session.loggedIn = true;
      req.session.email = user.email;
      res.redirect('/');
    } else {
      console.log(err);
    }
  });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  var user = {
    email: req.body.email,
    password: req.body.password
  };
  User.authenticate(user, function(err, user) {
    if (!err && user !== null) {
      req.session.loggedIn = true;
      req.session.email = user.email;
      res.redirect('/');
    } else {
      console.log(err);
    }
  });
});

router.get('/logout', helpers.ensureAuthenticated, function(req, res, next) {
  req.session.loggedIn = false;
  req.session.email = null;
  res.redirect('/');
});


module.exports = router;