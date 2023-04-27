var express = require("express");
var router = express.Router();
const { saveAppointment } = require("../db/bookings");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("bookAppointment.njk");
});

// To save an appointment in the database
router.post("/", async function (req, res, next) {
  const result = await saveAppointment(
    req.body.date,
    req.body.time,
    req.body.appointmentReason,
    req.body.additionalInformation,
    req.session.user.id
  );
  // If data not entered in all fields, send an error message

  if (!result) {
    return res.send("Error occured, unable to book appointment");
  }
  // Else redirect to booking confirmation page
  res.redirect("/bookingConfirmation");
});

module.exports = router;
