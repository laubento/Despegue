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
    async createPayment(){
        const url = "https://api.mercadopago.com/checkout/preferences"
    
        const body = {
            // usuario comprador
            payer_email : "test_user_47008967@testuser.com",
            
            items:[
                {
                    title: 'Title',
                    description:'Description',
                    picture_url: "http://www.myapp.com/myimage.jpg",
                    category_id:"category123",
                    quantity: 1,
                    unit_price: 10
                }
            ],
            back_urls : {
                failure: "/failure",
                pending: "/pending",
                success: "/success"
            },
            notification_url: "https://www.your-site.com/ipn"
        };
        const payment = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
                
            }
        });
        return payment.data;
    };


}


module.exports = PaymentService