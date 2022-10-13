const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send('hola')
  console.log(req.body);
});

module.exports = router;