import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addFlightToCart, getPayment, getPaymentInfo } from '../../Redux/Actions';
import Card from '../Card/Card';

export default function Cart() {

    const dispatch = useDispatch();
    const history = useHistory();

    // global states
    const payment = useSelector((state) => state.getPayment);
    let selectedFlight = useSelector((state) => state.flightDetail);
    let cart = useSelector((state) => state.flightsCart)

    let cartRespaldo = JSON.parse(localStorage.getItem('cartRespaldo'))
    if(cart.length > 0){
        localStorage.setItem('cartRespaldo', JSON.stringify(cart))
    }
    // console.log(cart)
    // console.log(cartRespaldo)
    let items = 
            cart.length > 0
                ? cart.map((el) => ({
                    title: "Pasaje de vuelo",
                    description:'Description',
                    picture_url: "http://www.myapp.com/myimage.jpg",
                    category_id:"category123",
                    quantity: 1,
                    unit_price: parseInt(el.price)
                    })) 
                : cartRespaldo !== null 
                    ? cartRespaldo.map((el) => ({
                        title: "Pasaje de vuelo",
                        description:'Description',
                        picture_url: "http://www.myapp.com/myimage.jpg",
                        category_id:"category123",
                        quantity: 1,
                        unit_price: parseInt(el.price)})) 
                    : ''
    // console.log(items)

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

    // const test = cart.filter(el => el.id === selectedFlight.id)

    useEffect(() => {
        if (selectedFlight.length > 0) {
            dispatch(addFlightToCart(selectedFlight));
        }
    }, [dispatch, selectedFlight])

    const handleClick = async (e) => {
        await dispatch(getPayment(prueba))
        // dispatch(getPaymentInfo(prueba))
        history.push('/purchase');
    }
    
    return(
        <div>
            <h1 className='text-center mt-3'>CARRITO DE COMPRAS</h1>
            {
                items !== '' 
                    ? cart.length >  0 
                        ? cart.map((e,i) => {
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
                        : cartRespaldo.map((e,i) => {
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
                    : ''
            }
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
                <div className='col-md-4 text-right'>
                    <div className='container'>
                    <button className='btn btn-success' onClick={handleClick}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}