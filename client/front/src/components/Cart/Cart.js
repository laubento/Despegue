import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert'
import { Link, useHistory } from 'react-router-dom';
import { addFlightToCart, clearCart, clearFlightDetail, clearFlights, getFlights, getPayment, getPaymentInfo } from '../../Redux/Actions';
import Card from '../Card/Card';
import Loader from "../Loader/Loader.js";
import AsistCard from '../Asistencias/AsistCart';
import './Cart.css'
import * as alerts from '../../utils/alerts'
import dotenv from "dotenv";
// import _ from 'lodash'
import { useAuth0 } from '@auth0/auth0-react';
dotenv.config();



export default function Cart() {

    const { loginWithRedirect } = useAuth0();
    const dispatch = useDispatch();
    const history = useHistory();
    const onFirstFlightRoute = useSelector((state) => state.onFirstFlightRoute);
    const onSecondFlightRoute = useSelector((state) => state.onSecondFlightRoute);
    let user = useSelector((state) => state.user);
    const user2 = JSON.parse(window.localStorage.getItem("user"));
    let asistant = useSelector((state) => state.asistant);
    

    if(asistant !== null){
        if (!asistant.type) {
            asistant = JSON.parse(localStorage.getItem('asistant'))
        }
    }

    
    if (!user && user2) user = user2;

    // global states
    const flights = useSelector(state => state.flights)
    const firstFlight = useSelector(state => state.firstFlights)
    const [backToSearch, setBackToSearch] = useState('')
    const [display, setDisplay] = useState(false)
    const payment = useSelector((state) => state.getPayment);
    let selectedFlight = useSelector((state) => state.flightDetail);
    let cart = useSelector((state) => state.flightsCart)
    let tripType = localStorage.getItem('tripType')
    let cartRespaldo = JSON.parse(localStorage.getItem('cartRespaldo'))
    if (cart.length > 1) {
        let display = true;
        localStorage.setItem('display', display)
        localStorage.setItem('cartRespaldo', JSON.stringify(cart))
        localStorage.setItem('detail', JSON.stringify(cart))
    }
    // if(cart.length === 1){
    //     cart = []
    // }
    let items =
        cart.length > 0
            ? cart.map((el) => ({
                title: "Pasaje de vuelo",
                description: 'Description',
                picture_url: "http://www.myapp.com/myimage.jpg",
                category_id: "category123",
                quantity: 1,
                unit_price: parseInt(el.price),
            }))
            : cartRespaldo !== null
                ? cartRespaldo.map((el) => ({
                    title: "Pasaje de vuelo",
                    description: 'Description',
                    picture_url: "http://www.myapp.com/myimage.jpg",
                    category_id: "category123",
                    quantity: 1,
                    unit_price: parseInt(el.price)
                }))
                : ''

    const prueba = {
        body: {
            payer_email: "test_user_47008967@testuser.com",
            items,
            notification_url: "https://www.your-site.com/ipn",
            back_urls: {
                failure: "https://despegue.vercel.app/failure",
                success: "https://despegue.vercel.app/success",
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
    useEffect(async () => {
        
        if(selectedFlight.length === 0){
            return;
        }else{    
        if(onFirstFlightRoute === false && onSecondFlightRoute === false) {
            console.log('ida')
            if(cart.length > 1 ){
                if(cartRespaldo !== null){
                    if(cartRespaldo.length > 1){
                        return;
                    }
                }
                return;
            }
            if(asistant === null){
                console.log('assistant null')
                return;
            }
            if (selectedFlight.length > 0) {
               dispatch(addFlightToCart(selectedFlight));
            }
            if (asistant.type) {
                console.log('asistant')
              return  dispatch(addFlightToCart([asistant]))
            }
        }
        
        if(selectedFlight.length === 0){
            return;
        }
        if(cart.length >= 2 ){
            if(cartRespaldo !== null){
                if(cartRespaldo.length > 2){
                    return;
                }
            }
            return;
        }
        if(asistant === null){
            console.log('assistant null')
            return;
        }
        if (selectedFlight.length > 0) {
            console.log(selectedFlight)
            dispatch(addFlightToCart(selectedFlight));
            console.log('cart1', cart)
        }
        if (asistant.type) {
            dispatch(addFlightToCart([asistant]))
            console.log('cart2', cart)
        }
        }
    }, [dispatch, selectedFlight, asistant])

    function checkCart(e){
        if(cart && cart.length === 0 ) return true
        if(cartRespaldo && cartRespaldo.length === 0 ) return true
        return false
    }

    const handleClick = async (e) => {

        
        if (tripType === 'roundtrip' && cart.length === 2) {
            setBackToSearch('Falta un vuelo. Por favor vuelva a buscar el pasaje que falta.')
            return swal('Has seleccionado ida y vuelta, falta un vuelo.', '', 'warning')
        }
        if (tripType === 'roundtrip' && cartRespaldo.length === 2) {
            setBackToSearch('Falta un vuelo. Por favor vuelva a buscar el pasaje que falta.')
            return swal('Has seleccionado ida y vuelta, falta un vuelo.', '', 'warning')
        }
        localStorage.setItem('callbackUrl', window.location.pathname)

        //validaciones usuario
        if(cart && cart.length === 0 ) return swal('Carrito de compras vacío, vuelva a hacer su búsqueda.', '', 'error')
        if(cartRespaldo && cartRespaldo.length === 0 ) return swal('Carrito de compras vacío, vuelva a hacer su búsqueda.', '', 'error')
        if(!user) return alerts.notLogedForPurchase(loginWithRedirect)
        // else if(user.email === "") return alerts.noEmail(history)
        // else if(!user.verify) return alerts.notVerify()
        else {
            await dispatch(getPayment(prueba))
            localStorage.setItem('onCart', false)
            window.localStorage.removeItem("oferts")
            history.push('/purchase')
            // dispatch(clearCart())
        }
    }
    
    let ultimaBusqueda = JSON.parse(localStorage.getItem('busqueda'))
    const handleRebuscar = async (e) => {
        e.preventDefault();
        
        if (ultimaBusqueda.tripType === 'onewaytrip') {
            setDisplay(true)
            if (flights.length === 0) {
                dispatch(clearFlights())
                await dispatch(getFlights(ultimaBusqueda))
                history.push('/flights');
                return dispatch(clearCart())
            }
            history.push('/flights');
            return dispatch(clearCart())
        } else {
            setDisplay(true)
            if (firstFlight.length === 0) {
                dispatch(clearFlights())
                await dispatch(getFlights(ultimaBusqueda))
                history.push('/flights/roundtrip/firstFlight');
                return dispatch(clearCart())
            }
            history.push('/flights/roundtrip/firstFlight');
            return dispatch(clearCart())
        }
    }
    let cartSinAsistencias = cart.length ? cart.filter((e) => e.asistant === undefined) : null
    let cartSinAsistenciasRespaldo = cartRespaldo ? cartRespaldo.filter((e) => e.asistant === undefined) : null
    // console.log('cartSinAsis', cartSinAsistencias)
    // console.log('cartsinasisRes', cartSinAsistenciasRespaldo)
    
    return (
        <div className='cart-container'>
            <div className='d-flex justify-content-center'>

            {/* { cartRespaldo === undefined || cartRespaldo === null ? '' : */}
                <div className='cart-title-cart'> <h1 className=''>CARRITO DE COMPRAS</h1> </div>
            </div>
            
            <div className='d-flex justify-content-center'>
            <div className='flex-column'>

            {
                items !== ''
                    ? cart.length > 0
                        ? cartSinAsistencias.map((e, i) => {
                            {
                               return(
                                <div key={i} className='d-flex justify-content-center'>
                                    <Card
                                        id={e.id}
                                        cabin={e.cabinClass}
                                        departureName={e.departureAirportName}
                                        arrivalName={e.arrivalAirportName}
                                        departureCode={e.departureAirportCode}
                                        arrivalCode={e.arrivalAirportCode}
                                        segments={e.segments}
                                        airlinesName={e.airlinesNames}
                                        departureTime={e.departureTime}
                                        arrivalTime={e.arrivalTime}
                                        duration={e.duration}
                                        stopoversCount={e.stopoversCount}
                                        price={e.price}
                                        going={e.going}
                                        hideButton={true}
                                        cart={true}
                                    />
                                </div>
                                )
                            }
                        })
                        : cartSinAsistenciasRespaldo.map((e, i) => {
                            {
                             return( !e.asistant ? <div key={i} className='d-flex justify-content-center'>
                                    <Card
                                        cabin={e.cabinClass}
                                        departureName={e.departureAirportName}
                                        arrivalName={e.arrivalAirportName}
                                        departureCode={e.departureAirportCode}
                                        arrivalCode={e.arrivalAirportCode}
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
                                        cart={true}
                                    />
                                </div> : null)
                            }
                        })
                    : ''
            }

            {/* Asistencia */}
            <div className='mt-5'>
            <AsistCard obj={asistant} />
            </div>
            </div>
            </div>

            {
                cartRespaldo === undefined || cartRespaldo === null ? '' :
                cartRespaldo.length === 0  ?
                        <div>
                            {/* <div className='d-flex justify-content-center m-4'>
                        <span className='text-center font-weight-bold h3 FlightSearch-errorsText cart-vacio'>Su carrito está vacío.</span>
                       </div> */}
                            <div className='d-flex justify-content-center mb-4'>
                                <Link to='/'>
                                    <button className='p-2 cart-btn-home'>HOME</button>
                                </Link>
                            </div>
                            <div className='d-flex justify-content-center '>
                                <div className='d-flex flex-column cart-busqueda'>
                                    <h3 className='text-center cart-title'>Última búsqueda: </h3>
                                    <div className='d-flex justify-content-center p-2'>
                                        <div className='d-flex flex-column font-weight-bold m-2'>
                                            <span>Tipo de viaje: {ultimaBusqueda.tripType}</span>
                                            <span>Adultos: {ultimaBusqueda.adults}</span>
                                            <span>Origen: {ultimaBusqueda.departurePlace}</span>
                                            <span>Llegada: {ultimaBusqueda.arrivalPlace}</span>
                                            <span>Fecha salida: {ultimaBusqueda.departureDate}</span>
                                            {
                                                ultimaBusqueda.returningDate !== '' ?
                                                    <span>Fecha de vuelta: {ultimaBusqueda.returningDate} </span>
                                                    : ''
                                            }
                                            <span>Clase: {ultimaBusqueda.cabinClass}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center '>
                                <button className='cart-btn-home p-2 font-weight-bold' onClick={handleRebuscar}>Buscar</button>
                            </div>
                            {display === true ?
                                <div className="d-flex justify-content-center">
                                    <Loader />
                                </div> : ''}
                        </div>
                        : backToSearch.length ?
                            <div>
                                <div className='d-flex justify-content-center mb-4'>
                                    <Link to='/'>
                                        <button className='p-2 cart-btn-home'>HOME</button>
                                    </Link>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <div className='d-flex flex-column cart-busqueda'>
                                        <h3>Última búsqueda.</h3>
                                        <div className='d-flex justify-content-center'>
                                            <div className='d-flex flex-column font-weight-bold'>
                                                <span>Tipo de viaje: {ultimaBusqueda.tripType}</span>
                                                <span>Adultos: {ultimaBusqueda.adults}</span>
                                                <span>Origen: {ultimaBusqueda.departurePlace}</span>
                                                <span>Llegada: {ultimaBusqueda.arrivalPlace}</span>
                                                <span>Fecha salida: {ultimaBusqueda.departureDate}</span>
                                                {
                                                    ultimaBusqueda.returningDate !== '' ?
                                                        <span>Fecha de vuelta: {ultimaBusqueda.returningDate} </span>
                                                        : ''
                                                }
                                                <span>Clase: {ultimaBusqueda.cabinClass}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center '>
                                    <button className='btn cart-btn-home p-2 font-weight-bold' onClick={handleRebuscar}>Buscar</button>
                                </div>
                                {display === true ?
                                    <div className="d-flex justify-content-center">
                                    <Loader />
                                </div> : ''}
                            </div>

                            : null }

                            <div className='d-flex justify-content-center mt-5'>
                            <button className='btn-cart-comprar' hidden={checkCart()} onClick={handleClick}>Comprar</button>
                            </div>
            

        </div>
    )
}