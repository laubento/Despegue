const { Router } = require("express");
const router = Router();
const infoFlights = require("../utils/data");

console.log(infoFlights);
router.post("/", (req, res) => {
    
});

module.exports = router;
