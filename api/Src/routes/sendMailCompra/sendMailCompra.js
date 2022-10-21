const { Router } = require("express");

const router = Router();
const User = require('../../../models/user.js')
const infoTransporter = require('../utils/mailer.js')


router.post('/:id/:payment_id', async (req,res) => {
    const { id } = req.params
    const { payment_id } = req.params
    console.log(id)
    console.log(payment_id)
    let users = await User.find({_id: id})
    console.log(users)
    let mapEmail = users.map(e => e.email).join('')
    let nombre = users.map(e => e.firstName).join('')

    
    // fromTitle, tolist, subject, html
    await infoTransporter('DESPEGUE', mapEmail, 'Compra de su pasaje', `<div><h1> ${nombre} Gracias por la compra! ✈️✈️ </h1>
                                                                            <br/>
                                                                            <h3>Código de pago: ${payment_id}</h3> 
                                                                            <br/>
                                                                            <h2 style="color:blueviolet;">DESPEGUE</h2></div>`)
    res.json(users)
})








module.exports = router;