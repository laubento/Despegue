const { Router } = require("express");
const router = Router();
const User = require("../../models/user.js");
const bcrypt = require("bcryptjs");
const user = require("../../models/user.js");
const { findOne } = require("../../models/user.js");

router.put("/", async (req, res) => {
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
                return res.status(200).send('ok');
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
router.put("/changePassword", async (req, res) => {
    const {id} = req.body
    const {email} = req.body
    const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
   
    try {
        const user = await User.findOne({_id: id})
        let validate = await bcrypt.compare(req.body.password, user.password)
        
        if(validate){
            
            const updateUser = await User.updateOne(
                { _id: id },
                { $set: { password: hashedPassword, email: email } }
            );
            return res.status(201).send("Exitoso");
        }
        return res.status(401).send("Contraseña incorrecta");
    } catch (err) {
        return res.status(401).send("Ocurrio algun error");
    }
    // res.send("Problema");
});

module.exports = router;
