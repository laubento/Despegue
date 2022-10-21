import React from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'
import { useSelector } from "react-redux";

function Success(props) {
    const history = useHistory()
    const query = new URLSearchParams(props.location.search);
    const user = useSelector(state => state.user)
    console.log(user)
    let display = localStorage.getItem('display')
    const status = query.get('status')
    //binarymode
    let vuelo = JSON.parse(localStorage.getItem('detail'))
    if(status === 'approved' ) {
      // let price = vuelo.map(e => e.price).join('')
    console.log(vuelo)
    if(vuelo !== null){
        //dentro de este if guardar en base de datos el historial de compra.
        vuelo.map(e => console.log(e.price))
    }
    swal('Felicidades!', `Has comprado tu pasaje`, 'success')
      history.push('/user')

      if(display === 'false'){
        localStorage.clear('sinLog')
      }
    }
  return (
    <div></div>
  )
}

export default Success