const { Router } = require("express");
const User = require("../../../models/user");
const bcrypt = require("bcryptjs");
const router = Router();

router.post("/", (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) return res.status(400).send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        firstName: req.body.name,
        password: hashedPassword,
        email: req.body.email,
        lastname: '',
        photo: '',
        dni: '',
        phone: '',
        birthDate: ''
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});




module.exports = router;
