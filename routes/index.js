var express = require("express");
const login = require("./userLogin");
var router = express.Router();
const dashboard = require("./dashboard");
const bookAppointment = require("./bookAppointment");
const registerUser = require("./registerUser");
const deleteAppointment = require("./deleteAppointment");
const viewYourAppointments = require("./viewYourAppointments");
const viewPatientAppointments = require("./viewPatientAppointments");
const bookingConfirmation = require("./bookingConfirmation");
const deleteConfirmation = require("./deleteConfirmation");
const userRole = require("../middleware/userRole");
const editAppointment = require("./editAppointment");

router.get("/", function (req, res, next) {
  res.render("index.njk", { title: "Home" });
});

router.use(userRole);

router.use("/registerUser", registerUser);

router.use("/userLogin", login);

router.use("/dashboard", dashboard);

router.use("/bookAppointment", bookAppointment);

router.use("/deleteAppointment", deleteAppointment);

router.use("/viewYourAppointments", viewYourAppointments);

router.use("/viewPatientAppointments", viewPatientAppointments);

router.use("/bookingConfirmation", bookingConfirmation);

router.use("/deleteConfirmation", deleteConfirmation);

router.use("/appointment", editAppointment);

module.exports = router;
