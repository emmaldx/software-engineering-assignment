var express = require("express");
var router = express.Router();
const { fetchUser } = require("../db/users");

// GET users
router.get("/", function (req, res, next) {
  res.render("login.njk");
});

// To check email and password are valid
router.post("/", async function (req, res, next) {
  const result = await fetchUser(req.body.Email, req.body.Passsword);

  // If data not entered correctly or at all in the fields, send an error message
  if (!result) {
    return res.send("Access denied, email or password cannot be found");
  }
  req.session.user = result;

  // Else redirect to dashboard
  res.redirect("/dashboard");
});

module.exports = router;
