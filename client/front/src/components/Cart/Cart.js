import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addFlightToCart, getPayment, getPaymentInfo } from '../../Redux/Actions';
import Card from '../Card/Card';

export default function Cart() {
    const dispatch = useDispatch();
    const history = useHistory();
    const payment = useSelector((state) => state.getPayment);

    let selectedFlight = useSelector((state) => state.flightDetail);
    let cart = useSelector((state) => state.flightsCart)
    let items = cart.map((el) => ({
        title: "Title",
        description:'Description',
        picture_url: "http://www.myapp.com/myimage.jpg",
        category_id:"category123",
        quantity: 1,
        unit_price: parseInt(el.price)
    }))

    const prueba = {
        body: {
          payer_email: "test_user_47008967@testuser.com",
          items,
          notification_url: "https://www.your-site.com/ipn",
          back_urls : {
            failure: "http://localhost:3000/failure",
            success: "http://localhost:3000/success",
            },
          "purpose": "wallet_purchase",

            "payment_methods": {
            "excluded_payment_types": [
                {
                    "id": "ticket"
                }
            ],
            "installments": 12
            },
        }
    }

    useEffect(() => {
        dispatch(addFlightToCart(selectedFlight))
    }, [dispatch])

    const handleClick = async (e) => {
        await dispatch(getPayment(prueba))
        // dispatch(getPaymentInfo(prueba))
        history.push('/purchase');
    }
    
    return(
        <div>
            <h1>CARRITO DE COMPRAAAAS!</h1>
            {
                cart.length !==  0 ? 
                cart.map((e,i) => {
                    return(
                        <div key={i} className='d-flex justify-content-center'>
                            <Card 
                                id={e.id}
                                segments={e.segments}
                                airlinesName={e.airlinesNames}
                                departureTime={e.departureTime}
                                arrivalTime={e.arrivalTime}
                                duration={e.duration}
                                stopoversCount={e.stopoversCount}
                                price={e.price}
                                going={e.going}
                                hideButton={true}
                            />
                        </div>
                    )})
                : <h2>No hay vuelos con estas características</h2>
            }
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
                <div className='col-md-4 text-right'>
                    <button className='btn btn-md btn-default' onClick={handleClick}>Comprar!</button>
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}