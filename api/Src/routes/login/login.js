const { Router } = require("express");

const router = Router();

const passport = require('passport')

router.post("/", (req, res) => {
  console.log(req.body);
  passport.authenticate('local', {
    
  })
});

module.exports = router;
