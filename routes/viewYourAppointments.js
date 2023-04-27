var express = require("express");
var router = express.Router();
const { retrieveAppointment } = require("../db/bookings");

// GET Users
router.get("/", async function (req, res, next) {
  const result = await retrieveAppointment(req.session.user.id);
  console.log(result);
  res.render("viewYourAppointments.njk", { data: result });
});



module.exports = router;
