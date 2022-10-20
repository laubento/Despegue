import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getPaymentInfo } from "../../Redux/Actions";
import FlightsSearch from "../FlightsSearch/FlightsSearch";

function Home(props) {
  
  const dispatch = useDispatch()
  const history = useHistory()
  const query = new URLSearchParams(props.location.search);
  const vueloToSave = useSelector(state => state.getPaymentInfo)
  const status = query.get('status')
  

  if(status === 'approved' ) {
    alert('approved')
    history.push('/')
    //info del vuelo
    let vuelo = localStorage.getItem('payment')
    // en items esta la info de los vuelos!
    // let real = JSON.stringify(vuelo)
    console.log(vuelo)
  }
  if(status === 'pending') {
    alert('pending')
    history.push('/')
  }
  if(status === 'null') {
    alert('failure')
    history.push('/')
    // si el pago sale mal no guardo nada y borro lo que se guardo en local storage!
    localStorage.clear('payment')
  }

  return (
    <div className="p-4">
      <FlightsSearch/>
    </div>
  );
}

export default Home;
