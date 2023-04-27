const setUserRole = (req, res, next) => {
  if (req.session.user) {
    res.locals.roleId = req.session.user.roleId;
  }
  next();
};
module.exports = setUserRole;
