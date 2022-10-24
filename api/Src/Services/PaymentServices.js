const axios = require('axios');

//COMPRADOR
// {
//     "id": 1219658729,
//     "nickname": "TETE7064342",
//     "password": "bjfOdnU67q",
//     "site_status": "active",
//     "email": "test_user_47008967@testuser.com"
//   }
//VENDEDOR
// {
//     "id": 1219659543,
//     "nickname": "TETE3586281",
//     "password": "ktDqzvGti9",
//     "site_status": "active",
//     "email": "test_user_74671751@testuser.com"
//   }

class PaymentService {
    async createPayment(body){
        const url = "https://api.mercadopago.com/checkout/preferences"
        const payment = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                
            }
        });
        console.log(payment)
        return payment.data;
    };


}


module.exports = PaymentService