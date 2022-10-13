const { Router } = require("express");
const User = require("../../../models/user");
const bcrypt = require("bcryptjs");

const router = Router();

router.post("/", async (req, res) => {
  // const user = await User.findOne({ email: req.body.email });
  // if (req.body.emial === user.email) res.send("Usuario existente");
  User.findOne(
    {
      email: req.body.email,
    },
    async (err, doc) => {
      if (err) throw err;
      console.log(doc);
      if (doc.email) return res.status(400).send("User already exists");
      if (!doc.email) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
          name: req.body.name,
          password: hashedPassword,
          email: req.body.email,
        });
        await newUser.save();
        res.status(201).send("User create");
      }
    }
  );
});

module.exports = router;
