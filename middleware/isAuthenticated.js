// function to protect routes from non logged in users
function isAuthenticated(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/userLogin");
  }
  next();
}
module.exports = isAuthenticated;
