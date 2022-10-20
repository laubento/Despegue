import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert'
import { getPaymentInfo, storePurchase } from "../../Redux/Actions";
import { useHistory } from "react-router-dom";
import mp from '../../Images/mercadopago.png'
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Checkout() {
    
    const history = useHistory()
    const user = useSelector((state) => state.user);
    const flight = useSelector((state) => state.flightDetail);
    const payment = useSelector(state => state.getPayment)
    const flightCart = useSelector(state => state.flightsCart)
    let sinLog;
    console.log(user)
    const handlePayment = async (e) => {
        e.preventDefault();
        if(user !== null){
            sinLog = false
             localStorage.setItem('sinLog', sinLog)
            console.log(payment)
            if(payment.length === 0){
                let infoCompra = JSON.parse(localStorage.getItem('init_point'))
                console.log(infoCompra)
                let link = {}
                infoCompra.map(e => {
                    link.init_point = e.init_point
                })
                return  window.location.href = link.init_point
            }
            console.log(payment)
            let link = {}
            payment.map(e => {
              link.init_point = e.init_point
            })
            if(flightCart.length === 2){
                localStorage.setItem('detail', JSON.stringify(flightCart))
            }else{
                localStorage.setItem('detail', JSON.stringify(flight))
            }
            return  window.location.href = link.init_point
        }
        await swal('Necesitas estar logueado para comprar', '', 'error')
        sinLog = true
        localStorage.setItem('init_point', JSON.stringify(payment))
        if(flightCart.length === 2){
        localStorage.setItem('detail', JSON.stringify(flightCart))
            }else{
                localStorage.setItem('detail', JSON.stringify(flight))
            }
        localStorage.setItem('sinLog', sinLog)
        return history.push('/login')
      }
    console.log(flightCart)
    console.log(flight)
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: flight[0].price.toString(),
                    },
                },
            ],
        });
    };
    const onApprove = (data, actions) => {
        // dispatch(storePurchase(user, flight))
  swal('Felicidades!', 'Has realizado una compra.', 'success')
        history.push('/')
        // console.log(actions.order.capture());
        return actions.order.capture();
    };
    const onCancel = (data, actions) => {
        swal('Compra cancelada', 'Presiona el boton para volver a la pagina', 'warning')
        history.push('/')
        // alert("Compra cancelada");
    };
    const onError = (data, actions) => {
        swal('Algo ha salido mal!', 'Presiona el botón para volver a la página.', 'error')
        history.push('/')
        // alert("Ha ocurrido un error con la compra");
    };

    
    return (

        
        <div className={style.box}>

            <div className={style.wrapper}>
            <div  className={style.btnmp}>
            <button className={style.btnlink} onClick={(e) => handlePayment(e)} > 
            <img src={mp} className={style.btnimg} /> 
            </button>
            </div>
                <PayPalButton
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                    onCancel={(data, actions) => onCancel(data, actions)}
                    onError={(data, actions) => onError(data, actions)}
                />
            </div>
        </div>
    );
}
