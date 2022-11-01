import React from "react";
import ReactDOM from "react-dom";
import style from "./Checkout.module.css";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import mp from "../../Images/mercadopago.png";
import axios from "axios";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Checkout() {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const history = useHistory();
  const payment = useSelector((state) => state.getPayment);
  //   const flightCart = useSelector((state) => state.flightsCart);
  const flightCart = JSON.parse(window.localStorage.getItem("cartRespaldo"));

  let sinLog;
  let display;
  const handlePayment = async (e) => {
    e.preventDefault();
    if (user !== null) {
      sinLog = false;
      display = false;
      localStorage.setItem("sinLog", sinLog);
      localStorage.setItem("display", display);
      console.log(payment);
      if (payment.length === 0) {
        let infoCompra = JSON.parse(localStorage.getItem("init_point"));
        console.log(infoCompra);
        let link = {};
        infoCompra.map((e) => {
          link.init_point = e.init_point;
        });
        return (window.location.href = link.init_point);
      }

      let link = {};
      payment.map((e) => {
        link.init_point = e.init_point;
      });
      return (window.location.href = link.init_point);
    }
    await swal(
      "Necesitas iniciar sesión o tener una cuenta para comprar.",
      "",
      "error"
    );
    sinLog = true;
    display = true;
    localStorage.setItem("display", display);
    localStorage.setItem("sinLog", sinLog);
  };

  if (payment.length) {
    localStorage.setItem("init_point", JSON.stringify(payment));
    if (flightCart.length === 2) {
      localStorage.setItem("detail", JSON.stringify(flightCart));
    } else {
      let cartRespaldo = JSON.parse(localStorage.getItem("cartRespaldo"));
      localStorage.setItem("detail", JSON.stringify(cartRespaldo));
    }
  }

  //Paypal
  const values = flightCart.map((flight) => parseInt(flight.price));
  const sumValues = values.reduce((a, b) => a + b, 0);
  let flight = flightCart.filter((e) => e.asistant === undefined);
  let asistant = flightCart.filter((e) => e.asistant);
  let info = JSON.parse(window.localStorage.getItem("busqueda"));

  console.log(flight);
  // if (!flight[1]) {
  //   flight = flightCart[0];
  // }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: sumValues.toString(),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    // dispatch(storePurchase(user, flight))
    axios
      .post("/users/purchaseComplete", { user, flight, info, asistant })
      .then((e) => {
        swal("Felicidades!", "Has realizado una compra.", "success");
      })
      .catch((e) => swal("Ha ocurrido un error"));

    // swal('Felicidades!', 'Has realizado una compra.', 'success')
    history.push("/user/travels");
    return actions.order.capture();
  };
  const onCancel = (data, actions) => {
    swal(
      "Compra cancelada",
      "Presiona el boton para volver a la pagina",
      "warning"
    );
    history.push("/");
  };
  const onError = (data, actions) => {
    swal(
      "Algo ha salido mal!",
      "Presiona el botón para volver a la página.",
      "error"
    );
    history.push("/");
  };

  return (
    <div className={style.box}>
      <div className={style.wrapper}>
        <div className={style.btnmp}>
          <button className={style.btnlink} onClick={(e) => handlePayment(e)}>
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
