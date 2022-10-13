const { Router } = require("express");

const router = Router();

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;