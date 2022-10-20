const { Router } = require("express");
const passport = require("passport");

const router = Router();

router.post("/", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) return res.send("Not user exist");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Success");
      });
    }
  })(req, res, next);
});

module.exports = router;
