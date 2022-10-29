const { Router } = require("express");
const router = Router();
const User = require("../../models/user.js");
const bcrypt = require("bcryptjs");
const { isUser } = require("./login/verifyToken");

router.put("/", isUser, async (req, res) => {
  const { id, firstName, lastName, birthDate, dni, phone, email } = req.body;
  try {
    const updateUser = await User.updateOne(
      { _id: id },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
          dni: dni,
          phone: phone,
          email: email,
          birthDate: birthDate,
        },
      }
    );
    User.findOne({ _id: id })
      .then(() => {
        return res.status(200).send("ok");
      })
      .catch(() => res.send(updateUser));
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  const { id } = req.body;

  User.findOne({ _id: id })
    .then((rep) => {
      return res.send(rep);
    })
    .catch(() => res.send("si"));
});

// Cambiar contrasena
router.put("/changePassword", isUser, async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const updateUser = await User.updateOne(
      { email: req.body.email },
      { $set: { password: hashedPassword } }
    );
    return res.send("Exitoso");
  } catch (err) {
    console.log(err);
  }
  res.send("Problema");
});

module.exports = router;
