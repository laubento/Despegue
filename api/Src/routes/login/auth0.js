const { Router } = require("express");
const { requiresAuth } = require("express-openid-connect");

const router = Router();

router.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged out");
});
router.get("/profile", requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});
router.get("/login/success",requiresAuth(), (req, res) => {
    console.log(req.oidc.user);
  if (req.oidc.user) {
    res.status(200).send({
      success: true,
      message: "successfull",
      user: req.oidc.user,
      //   cookies: req.cookies
    });
  }
});

module.exports = router;
