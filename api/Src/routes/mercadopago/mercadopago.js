const { Router } = require("express");

const router = Router();


const PaymenController = require('../../Controllers/PaymentsController.js')
const PaymentService = require('../../Services/PaymentServices');
const { isUser } = require("../login/auth/verifyToken.js");
const PaymentInstace = new PaymenController(new PaymentService())

/* GET home page. */
// para generar links de pago esto debe ser un router.post


router.post('/payment',isUser, function(req, res, next) {
    PaymentInstace.getPaymentLink(req.body.body,res)
});



module.exports = router;