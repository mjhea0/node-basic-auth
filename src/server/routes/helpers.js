function ensureAuthenticated(req, res, next) {
  if (req.session.loggedIn) {
    return next();
  }
  else {
   res.redirect('/auth/login');
  }
}

module.exports = {
  ensureAuthenticated: ensureAuthenticated
};