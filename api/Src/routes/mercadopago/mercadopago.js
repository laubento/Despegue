const { Router } = require("express");

const router = Router();


const PaymenController = require('../../Controllers/PaymentsController.js')
const PaymentService = require('../../Services/PaymentServices')
const PaymentInstace = new PaymenController(new PaymentService())

/* GET home page. */
// para generar links de pago esto debe ser un router.post


router.get('/payment', async function(req, res, next) {
    PaymentInstace.getPaymentLink(req,res)
});



module.exports = router;