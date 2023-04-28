var express = require("express");
var router = express.Router();
const {
  editAppointment,
  updateAppointment,
  fetchAppointmentAdmin,
  deleteAppointment,
  editAppointmentAdmin,
} = require("../db/bookings");

/* GET users listing. */
router.get("/:appointmentId/edit", async function (req, res, next) {
  let result;
  if (req.session.user.role === "USER") {
    result = await editAppointment(
      req.session.user.id,
      req.params.appointmentId
    );
  } else {
    result = await editAppointmentAdmin(req.params.appointmentId);
  }
  res.render("editAppointment.njk", { data: result });
});

router.get("/:appointmentId/delete", async function (req, res, next) {
  const result = await fetchAppointmentAdmin(req.params.appointmentId);
  res.render("deleteAppointment.njk", { data: result });
});

// To edit/save an appointment in the database
router.post("/:appointmentId/edit", async function (req, res, next) {
  const result = await updateAppointment(
    req.body.date,
    req.body.time,
    req.body.appointmentReason,
    req.body.additionalInformation,
    req.params.appointmentId
  );
  // If data not entered in all fields, send an error message

  if (!result) {
    return res.send("Error occured, unable to book appointment");
  }
  // Else redirect to booking confirmation page
  res.redirect("/bookingConfirmation");
});

router.post("/:appointmentId/delete", async function (req, res, next) {
  // If user clicks no, return to view patient appointments
  if (req.body.delete === "No") {
    return res.redirect("/viewPatientAppointments");
  }

  await deleteAppointment(req.params.appointmentId);

  // Else redirect to deletion confirmation page
  res.redirect("/deleteConfirmation");
});

module.exports = router;
