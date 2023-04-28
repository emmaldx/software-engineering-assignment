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
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/", function (req, res, next) {
  res.render("index.njk", { title: "Home" });
});

router.use(userRole);

router.use("/registerUser", registerUser);

router.use("/userLogin", login);

router.use("/dashboard", isAuthenticated, dashboard);

router.use("/bookAppointment", isAuthenticated, bookAppointment);

router.use("/deleteAppointment", isAuthenticated, deleteAppointment);

router.use("/viewYourAppointments", isAuthenticated, viewYourAppointments);

router.use(
  "/viewPatientAppointments",
  isAuthenticated,
  viewPatientAppointments
);

router.use("/bookingConfirmation", isAuthenticated, bookingConfirmation);

router.use("/deleteConfirmation", isAuthenticated, deleteConfirmation);

router.use("/appointment", isAuthenticated, editAppointment);

router.get("/sign-out", (req, res, next) => {
  delete req.session.user;
  res.redirect("/userLogin");
});

module.exports = router;
