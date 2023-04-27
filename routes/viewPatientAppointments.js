var express = require("express");
var router = express.Router();
const { retrievePatientAppointments } = require("../db/bookings");
// GET Users
router.get("/", async function (req, res, next) {
  const result = await retrievePatientAppointments();
  console.log(result);
  res.render("viewPatientAppointments.njk", { data: result });
});

module.exports = router;
