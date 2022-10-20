const { Router } = require("express");
const User = require("../../../models/user");
const router = Router();
const { isAuthenticated } = require("./validate-session");

router.get("/users", isAuthenticated, async (req, res) => {
  try {
    let users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(400).send("GET/ADMIN/USERS");
  }
});

router.post("/user", isAuthenticated, async (req, res) => {
  try {
    if (req.body.email) {
      let user = User.findOne({ email: req.body.email });
      return res.send(user);
    }
    if (req.body.name) {
      let user = User.findOne({ email: req.body.name });
      return res.send(user);
    }
    res.send("Este usuario no existe");
  } catch (e) {
    res.status(400).json(e);
  }
});

router.put("/userupdate", async (req, res) => {
  try {
    let { email, name, roles, active } = req.body;
    await User.updateOne(
      { email },
      { $set: { name: name, roles: roles.push(roles), active: active } }
    );
    res.status(201).send("updated");
  } catch (e) {
    res.status(400).send("GET/ADMIN/USERUPDATE");
  }
});

module.exports = router;
