class PaymentController {

    constructor(subscriptionService) {
        this.subscriptionService = subscriptionService
    }

    async getPaymentLink (body,res) {
        try {
            const payment = await this.subscriptionService.createPayment(body)
            return res.json(payment)
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: true, msg:'FAiled to create payment'})
        }
    }

}

module.exports = PaymentController