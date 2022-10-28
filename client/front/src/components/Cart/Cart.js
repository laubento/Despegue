import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert'
import { Link, useHistory } from 'react-router-dom';
import { addFlightToCart, clearCart, clearFlights, getFlights, getPayment, getPaymentInfo } from '../../Redux/Actions';
import Card from '../Card/Card';
import Loader from "../Loader/Loader.js";
import AsistCard from '../Asistencias/AsistCart';
import './Cart.css'
import * as alerts from '../../utils/alerts'
import dotenv from "dotenv";
import { useAuth0 } from '@auth0/auth0-react';
dotenv.config();



export default function Cart() {

    const { loginWithRedirect } = useAuth0();
    const dispatch = useDispatch();
    const history = useHistory();

    let user = useSelector((state) => state.user);
    const user2 = JSON.parse(window.localStorage.getItem("user"));
    let asistant = useSelector((state) => state.asistant);
    if (!asistant.type) {
        asistant = JSON.parse(localStorage.getItem('asistant'))
    }
    console.log(asistant)
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
    if (cart.length > 0) {
        localStorage.setItem('cartRespaldo', JSON.stringify(cart))
    }

    console.log(cart)
    console.log(cartRespaldo)
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
    console.log(items)

    const prueba = {
        body: {
            payer_email: "test_user_47008967@testuser.com",
            items,
            notification_url: "https://www.your-site.com/ipn",
            back_urls: {
                failure: process.env.REACT_APP_VERCEL_URL_FAILURE || "http://localhost:3000/failure",
                success: process.env.REACT_APP_VERCEL_URL_SUCCESS || "http://localhost:3000/success",
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
            // dispatch(addFlightToCart(asistant))
        }
        if (asistant.type) {
            dispatch(addFlightToCart([asistant]))
        }
    }, [dispatch, selectedFlight, asistant])
    const handleClick = async (e) => {
        if (tripType === 'roundtrip' && cart.length === 1) {
            setBackToSearch('Falta un vuelo. Por favor vuelva a buscar el pasaje que falta.')
            return swal('Has seleccionado ida y vuelta, falta un vuelo.', '', 'warning')
        }
        if (tripType === 'roundtrip' && cartRespaldo.length === 1) {
            setBackToSearch('Falta un vuelo. Por favor vuelva a buscar el pasaje que falta.')
            return swal('Has seleccionado ida y vuelta, falta un vuelo.', '', 'warning')
        }
        localStorage.setItem('callbackUrl', window.location.pathname)
        if (!user) alerts.notLogedForPurchase(loginWithRedirect)
        else {
            await dispatch(getPayment(prueba))
            history.push('/purchase')
        }
        // dispatch(getPaymentInfo(prueba))
        localStorage.setItem('onCart', false)
        history.push('/purchase');
        dispatch(clearCart())
    }
    localStorage.setItem('onCart', true)
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
    return (
        <div className='container-xxl'>
            <h1 className='text-center mt-3'>CARRITO DE COMPRAS</h1>
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
            <div className='container-xxl d-flex justify-content-center'>
                <AsistCard obj={asistant} />
            </div>

            {
                cartRespaldo === undefined || cartRespaldo === null ? '' :
                    cartRespaldo.length === 0 ?
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
                                <button className='btn FlightSearch-btn p-2 font-weight-bold' onClick={handleRebuscar}>Buscar</button>
                            </div>
                            {display === true ?
                                <div className="flights-cont">
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
                                    <button className='btn FlightSearch-btn p-2 font-weight-bold' onClick={handleRebuscar}>Buscar</button>
                                </div>
                                {display === true ?
                                    <div className="flights-cont">
                                        <Loader />
                                    </div> : ''}
                            </div>

                            :
                            <div className='row'>
                                <div className='col-md-4'></div>
                                <div className='col-md-4'></div>

                                <div className='col-md-4 text-right'>
                                    <div className='container'>
                                        <button className='btn btn-success' onClick={handleClick}>Comprar</button>
                                    </div>
                                </div>
                            </div>
            }

        </div>
    )
}