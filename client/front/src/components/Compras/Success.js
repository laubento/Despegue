import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { sendMailCompra } from "../../Redux/Actions";


function Success(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const query = new URLSearchParams(props.location.search);
  const status = query.get('status')
  const payment_id = query.get('payment_id')
  let infoBusqueda = JSON.parse(window.localStorage.getItem("busqueda"));
  let oferts = JSON.parse(window.localStorage.getItem("oferts"));
  let user = useSelector(state => state.user);
  const user2 = JSON.parse(window.localStorage.getItem("user"));
  let display = localStorage.getItem('display')
  let comprobacion = localStorage.getItem('cartRespaldo')
  if (!user && user2) user = user2;
  //binarymode
  let vuelo = JSON.parse(localStorage.getItem('detail'))
  let vuelos = comprobacion !== null ? vuelo.filter((e) => e.asistant === undefined) : []
  let asistant = comprobacion !== null ? vuelo.filter((e) => e.asistant) : []

  useEffect(() => {
    if (comprobacion !== null) {
      if (user && vuelo !== null) {
        let obj = {
          user: user ? user : null,
          flight: vuelos,
          info: infoBusqueda,
          asistant: asistant,
          oferts: []
        }
        axios.post('/users/purchaseComplete', obj)
          .then((e) => {
            console.log(e)
          }).catch((e) => {
            console.log(e)
          })
        let id = user !== null ? user.id : ''
        dispatch(sendMailCompra(id))
        swal('Felicidades!', `Has comprado tu pasaje`, 'success')
        history.push('/user')
        if (display === 'false') {
          localStorage.removeItem('sinLog')
          localStorage.removeItem('cartRespaldo')
          localStorage.removeItem('detail')
          localStorage.removeItem('init_point')
          localStorage.removeItem('asistant')
          localStorage.removeItem('busqueda')
          window.localStorage.removeItem("oferts")
          window.localStorage.removeItem("names")
          window.localStorage.removeItem("record")
        }

      }
    }
    else{
      if (user) {
        let obj = {
          user: user ? user : null,
          flight: [],
          info: infoBusqueda,
          asistant: asistant,
          oferts: [oferts]
        }
        axios.post('/users/purchaseComplete', obj)
          .then((e) => {
            console.log(e)
          }).catch((e) => {
            console.log(e)
          })
        let id = user !== null ? user.id : ''
        dispatch(sendMailCompra(id))
        swal('Felicidades!', `Has comprado tu pasaje`, 'success')
        history.push('/user')
        if (display === 'false') {
          localStorage.removeItem('sinLog')
          localStorage.removeItem('cartRespaldo')
          localStorage.removeItem('detail')
          localStorage.removeItem('init_point')
          localStorage.removeItem('asistant')
          localStorage.removeItem('busqueda')
          window.localStorage.removeItem("oferts")
          window.localStorage.removeItem("names")
          window.localStorage.removeItem("record")
        }

      }
    }
  }, [user, dispatch, swal, display])

  return (
    <div>{user ? user.firstName : null}</div>
  )
}

export default Success