var express = require("express");
var router = express.Router();
const { saveUser } = require("../db/users");

// GET users
router.get("/", function (req, res, next) {
  res.render("register.njk", { title: "Register" });
});

// To save a user in the database
router.post("/", async function (req, res, next) {
  try {
    console.log(req.body);
    // If data not entered in all fields, send an error message
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.Email ||
      !req.body.Passsword
    ) {
      return res.send("Error occured, all fields are required");
    }
    const result = await saveUser(
      req.body.firstName,
      req.body.lastName,
      req.body.Email,
      req.body.Passsword
    );
    // If data not entered in all fields, send an error message
    console.log(result);
    if (!result) {
      return res.send("Error occured, unable to register user");
    }
    // Else redirect to Login Page
    res.redirect("/userLogin");
  } catch (error) {
    console.log(error);
    res.send("Error occured");
  }
});

module.exports = router;
