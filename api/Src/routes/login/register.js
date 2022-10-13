const { Router } = require("express");
const User = require('../../../models/user')
const bcrypt = require("bcryptjs");
const router = Router();

// router.post("/", async (req, res) => {
  // const {name, email, password, confirm_password} = req.body
  
  // if(password !== confirm_password){
  //   return res.send('Contraseñas distintas.')
  // }

  // const newUser = new User({name,email,password})

  // await newUser.save();
  // const usuarios = User.find({})
  // console.log(usuarios)
  // console.log(req.body)



// const router = Router();

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
      if (doc) return res.status(400).send("User already exists");
      if (!doc) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
          name: req.body.name,
          password: hashedPassword,
          email: req.body.email,
        });
        await newUser.save();
        return res.status(201).send("User create");
      }
    }
  );
});

module.exports = router;
