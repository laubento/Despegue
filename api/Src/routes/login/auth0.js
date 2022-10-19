const { Router } = require("express");
const { requiresAuth } = require("express-openid-connect");

const router = Router();

router.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged out");
});
router.get("/profile", requiresAuth(), (req, res) => {
    console.log(req.oidc.user);
  res.send(req.oidc.user);
});

router.get('/lo',(req,res) => {

})

module.exports = router;
