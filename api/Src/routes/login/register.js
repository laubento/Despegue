const { Router } = require("express");
const User = require("../../../models/user");
const bcrypt = require("bcryptjs");

const router = Router();

// router.post("/", async (req, res) => {
//   await User.findOne(
//     {
//       email: req.body.email,
//     },
//     async (err, doc) => {
//       if (err) throw err;
//       console.log(doc);
//       if (doc) return res.status(400).send("User already exists");
//       if (!doc) {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);
//         const newUser = new User({
//           name: req.body.name,
//           password: hashedPassword,
//           email: req.body.email,
//         });
//         await newUser.save();
//         res.status(201).send("User create");
//       }
//     }
//   );
// });

router.post('/', async(req,res) => {
  const {name, password,email} = req.body
  const usuarios = await User.find({})
  // let emails = usuarios.map(e => e.email)
  // console.log(emails)
  // if(emails.includes(email)){
  //   return res.send(`el email ${email} existe`)
  // }else{
  //   const newUser = new User({
  //           name: name,
  //           password: password,
  //           email: email
  //       });
  //       await newUser.save();
  //       res.status(201).send("User create");
  // }
  console.log(usuarios)
})

module.exports = router;
