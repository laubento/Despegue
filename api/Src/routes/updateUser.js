const { Router } = require("express");
const router = Router();
const User = require("../../models/user")

router.put("/", async (req, res) => {
    const {id, firstName, lastName, birthDate, dni, phone, email} = req.body
    try{
        const updateUser = await User.updateOne({_id: id}, {$set: {firstName: firstName , lastname: lastName, dni: dni,
             phone: phone, email: email, birthDate: birthDate}})
        res.send(updateUser)
}   
    catch(err){console.log(err)}
})

module.exports = router