const router = require("express").Router();
const passport = require("passport");
require("dotenv").config()

const CLIENT_URL = "http://localhost:3000/"

router.get("/login/success", (req, res) => {
    console.log(res.user);
  if (req.user) {
    res.status(200).send({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  // req.session = null;
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile",'email'] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login/failed" }), 
  (req, res) => {
      res.redirect(CLIENT_URL)
    }
)

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
