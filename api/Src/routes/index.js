const { Router } = require("express");
const router = Router();

const User = require("../../models/user");

const prices = require("./prices");
router.use('/prices', prices)

const flightRouter = require("./flights")
router.use('/flights', flightRouter)

module.exports = router;
