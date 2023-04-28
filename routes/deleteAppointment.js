var express = require("express");
var router = express.Router();
const { fetchAppointmentAdmin } = require("../db/bookings");
const { deleteAppointment } = require("../db/bookings");

// GET users
router.get("/:appointmentId/delete", async function (req, res, next) {
  const result = await fetchAppointmentAdmin(req.params.appointmentId);
  res.render("deleteAppointment.njk", { data: result });
});

router.delete("/", async function (req, res, next) {
  res.redirect("/deleteConfirmation");
});
module.exports = router;
