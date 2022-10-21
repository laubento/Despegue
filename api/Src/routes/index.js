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
const auth = require("./login/auth");
const adminUsers = require("./admin/users");
const offers = require("./admin/offers");

router.use("/auth", auth);
router.use("/login", login);
router.use("/register", register);
router.use("/user", user);
router.use("/admin", adminUsers);
router.use("/admin/offers", offers);

// const filters = require('./filters')
// router.use('/filters')

//getAirportByName
const searchByName = require("./searchByName/getAirportsByName.js");
router.use("/searchByName", searchByName);

//History & Purchase
const users = require("../routes/purchaseRelationship");
const getHistory = require("../routes/historyGet");
router.use("/users", users);
router.use("/users", getHistory);

//updateUserInfo
const update = require("./updateUser");
router.use("/update", update);

//mercadopago
const mercadopago = require('./mercadopago/mercadopago.js')
router.use("/mercadopago", mercadopago)

module.exports = router;