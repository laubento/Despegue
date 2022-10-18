const { Router } = require("express");
const User = require("../../../models/user");
const router = Router();
const { isAuthenticate } = require("./validate-session");

router.get("/users", isAuthenticate, async (req, res) => {
  try {
    let users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(400).send("GET/ADMIN/USERS");
  }
});

router.put("/userupdate", isAuthenticate, async (req, res) => {
  try {
    let { email, name, roles, active } = req.body;
    await User.updateOne(
      { email },
      { $set: { name: name, roles: roles, active: active } }
    );
    res.status(201).send("updated");
  } catch (e) {
    res.status(400).send("GET/ADMIN/USERUPDATE");
  }
});

module.exports = router;
