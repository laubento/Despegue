const { Router } = require("express");
const router = Router();
const User = require("../../models/user")

router.put("/", async (req, res) => {
    const {id, firstName, lastName, birthDate, dni, phone, email} = req.body
    try{
        const updateUser = await User.updateOne({_id: id}, {$set: {firstName: firstName , lastname: lastName, dni: dni,
             phone: phone, email: email, birthDate: birthDate}})
            User.findOne({_id: id}).then((rep) => {console.log('pepe'); return  res.send(rep)}).catch(() => res.send(updateUser))
}   
    catch(err){console.log(err)}
})

router.post('/', async (req, res) => {
    const {id} = req.body
    console.log(req.body)
    User.findOne({_id: id}).then((rep) => {console.log(rep); return  res.send(rep)}).catch(() => res.send('si'))
})

module.exports = router