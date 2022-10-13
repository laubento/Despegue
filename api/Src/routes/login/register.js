const { Router } = require("express");
<<<<<<< HEAD
const User = require('../../../models/user')
const router = Router();

router.post("/", async (req, res) => {
  // const {name, email, password, confirm_password} = req.body
  
  // if(password !== confirm_password){
  //   return res.send('Contraseñas distintas.')
  // }

  // const newUser = new User({name,email,password})

  // await newUser.save();
  // const usuarios = User.find({})
  // console.log(usuarios)
  console.log(req.body)
=======
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
>>>>>>> 9f9874a2030baeacea46951024e5ec8ed07e3690
});

module.exports = router;
