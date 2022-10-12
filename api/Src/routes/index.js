const { Router } = require("express");
const router = Router();

const prices = require("./prices");

router.use('/prices', prices)

module.exports = router;
