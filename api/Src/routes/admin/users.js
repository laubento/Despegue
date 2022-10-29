const { Router } = require("express");
const User = require("../../../models/user");
const router = Router();
const { isAdmin } = require("../login/verifyToken");

router.get("/users", isAdmin, async (req, res) => {
  try {
    let users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(400).send("GET/ADMIN/USERS");
  }
});

router.post("/user", isAdmin, async (req, res) => {
  try {
    if (req.body.email) {
      let user = await User.findOne({ email: req.body.email });
      return res.send(user);
    }
    if (req.body.name) {
      let user = await User.findOne({ email: req.body.name });
      return res.send(user);
    }
    res.send("Este usuario no existe");
  } catch (e) {
    res.status(400).json(e);
  }
});

router.put("/userupdate", isAdmin, async (req, res) => {
  try {
    let { email, name, roles, active, banned, membership } = req.body.user;

    await User.updateOne(
      { email },
      {
        $set: {
          name: name,

          active: active,
          banned: banned,
          roles: roles,
          membership: membership,
        },
        // $push: { roles: roles },
      }
    );
    // await User.updateOne({ email }, { $push: { roles: roles } });
    res.status(201).send("updated");
  } catch (e) {
    res.status(400).send("GET/ADMIN/USERUPDATE");
  }
});

module.exports = router;
