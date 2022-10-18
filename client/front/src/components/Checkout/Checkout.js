import React from "react";
import ReactDOM from "react-dom";
import style from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { storePurchase } from "../../Redux/Actions";
import { useHistory } from "react-router-dom";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Checkout() {
    const dispatch = useDispatch();
    const history = useHistory()

    const user = useSelector((state) => state.user);
    const flight = useSelector((state) => state.flightDetail);


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
        history.push('/')
        alert("Transaccion completada");
        // console.log(actions.order.capture());
        return actions.order.capture();
    };
    const onCancel = (data, actions) => {
        history.push('/')
        alert("Compra cancelada");
    };
    const onError = (data, actions) => {
        history.push('/')
        alert("Ha ocurrido un error con la compra");
    };
    return (
        <div className={style.box}>
            <div className={style.wrapper}>
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
