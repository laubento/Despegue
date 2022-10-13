const { Router } = require("express");
const router = Router();

const User = require("../../models/user");
const axios = require("axios");

// const prices = require("./filters/prices");
// router.use('/prices', prices)

const flightRouter = require("./flights");
router.use("/flights", flightRouter);

const stopOversFilter = require("./filters/stopOvers");
router.use("/stopOvers", stopOversFilter);

const flightDurationFilter = require("./filters/duration");
router.use("/duration", flightDurationFilter);

//login
const login = require("./login/login");
const register = require("./login/register");
const user = require("./login/user");
router.use("/login", login);
router.use("/register", register);
router.use("/user", user);

// const filters = require('./filters')
// router.use('/filters')

module.exports = router;
