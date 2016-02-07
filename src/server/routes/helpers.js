function ensureAuthenticated(req, res, next) {
  if (req.session.id !== null && req.session.id !== undefined) {
    return next();
  }
  else {
   res.redirect('/auth/login');
  }
}

module.exports = {
  ensureAuthenticated: ensureAuthenticated
};