const { Router } = require("express");
const User = require("../../models/user");

const flightRouter = require("./flights")

const router = Router();

router.use('/flights', flightRouter)


module.exports = router;
