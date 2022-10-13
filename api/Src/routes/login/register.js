const { Router } = require("express");
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
});

module.exports = router;