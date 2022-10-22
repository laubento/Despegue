import React, {useEffect} from "react";
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

    let user = useSelector((state) => state.user);
    const user2 = JSON.parse(window.localStorage.getItem("user"));
  
    if (!user && user2) user = user2;

    //binarymode
    let vuelo = JSON.parse(localStorage.getItem('detail'))
    console.log(user)
    useEffect(() => {
      if(user){
        let obj = {
          user: user ? user : null,
          flight: vuelo
        }
        axios({
          method: "POST",
          data: obj,
          url: "/users/purchaseComplete",
      }).then((e) => {
        console.log(e)
      }).catch((e) => {
        console.log(e)
      })
      let id = user !== null ? user.id : ''
      dispatch(sendMailCompra(id, payment_id))
      swal('Felicidades!', `Has comprado tu pasaje`, 'success')
      history.push('/user')
      }
    }, [user, dispatch, swal])
    console.log(user)
    let display = localStorage.getItem('display')
    if(status === 'approved' ) {
    if(vuelo !== undefined || vuelo !== null){
        //dentro de este if guardar en base de datos el historial de compra.
        if(user){
          let obj = {
            id: user ? user.id : null,
            flight: vuelo
          }
          console.log(obj)
          axios({
            method: "POST",
            data: obj,
            url: "/users/purchaseComplete",
        }).then((e) => {
          console.log(e)
          // swal('Felicidades!', `Has comprado tu pasaje`, 'success')
          // history.push('/user')
        }).catch((e) => {
          console.log(e)
        })
        }
    }
    

      if(display === 'false'){
        localStorage.clear('sinLog')
      }
    }
  return (
    <div>{user ? user.firstName : null}</div>
  )
}

export default Success