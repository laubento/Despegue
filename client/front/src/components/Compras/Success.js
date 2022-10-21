import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'
import { useSelector } from "react-redux";
import axios from 'axios'


function Success(props) {
    const history = useHistory()
    const query = new URLSearchParams(props.location.search);
    const user = useSelector(state => state.user)
    //binarymode
    let vuelo = JSON.parse(localStorage.getItem('detail'))
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
        swal('Felicidades!', `Has comprado tu pasaje`, 'success')
          history.push('/user')
      }).catch((e) => {
        console.log(e)
      })
      }
    }, [user])
    console.log(user)
    let display = localStorage.getItem('display')
    const status = query.get('status')
    if(status === 'approved' ) {
      // let price = vuelo.map(e => e.price).join('')
    console.log(vuelo)
    if(vuelo !== null){
        //dentro de este if guardar en base de datos el historial de compra.
        if(user){
          let obj = {
            id: user ? user.id : null,
            flight: vuelo
          }
          axios({
            method: "POST",
            data: obj,
            url: "/users/purchaseComplete",
        }).then((e) => {
          console.log(e)
          swal('Felicidades!', `Has comprado tu pasaje`, 'success')
            history.push('/user')
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