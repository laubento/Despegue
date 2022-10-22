const { Router } = require("express");

const router = Router();
const User = require('../../../models/user.js')
const infoTransporter = require('../utils/mailer.js')


router.post('/:id/:payment_id', async (req,res) => {
    const { id, payment_id} = req.params
    let users = await User.find({_id: id})
    console.log(users)
    let mapEmail = users.map(e => e.email).join('')
    let nombre = users.map(e => e.firstName).join('')

    
    // fromTitle, tolist, subject, html
    await infoTransporter('DESPEGUE', mapEmail, 'Compra de su pasaje', `<div style="background-color: rgb(129, 32, 168); border: 2px solid rgb(227, 118, 241); padding: 20px; margin: 20px; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-weight:bold">
                                                                            <h1 style="color: white; text-align:center"> ${nombre}, Gracias por tu compra, buen viaje! ✈️✈️</h1>
                                                                            <div style="display:flex ; justify-content: center; align-items: center">
                                                                            <img style="  object-fit: cover; width:100%; height:100%;" src="https://amp.umd.edu/sites/default/files/2021-03/Travel%20Modernization%20Banner.jpg" >
                                                                            </div>
                                                                            <h3 style="color: white">Código de pago: ${payment_id}</h3>
                                                                            <h4 style="color: rgb(223, 176, 227)">att: DESPEGUE.</h4>
                                                                        </div>`)
    res.send('msj enviado')
})








module.exports = router;