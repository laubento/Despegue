import React from "react";
import { useHistory } from "react-router-dom";
import FlightsSearch from "../FlightsSearch/FlightsSearch";
import swal from 'sweetalert'
// se usa info de momento

function Home(props) {
  // searchParams.get("__firebase_request_key")
  const history = useHistory()
  const query = new URLSearchParams(props.location.search);
  const status = query.get('status')
  //binarymode
  if(status === 'approved' ) {
  swal('Felicidades!', 'Has realizado una compra.', 'success')
    history.push('/')
    //info del vuelo
    let vuelo = JSON.parse(localStorage.getItem('detail'))
    // en items esta la info de los vuelos!
    //guardar base de datos
    console.log(vuelo)

  }

  if(status === 'null') {
  swal('Algo ha salido mal!', 'Presiona el botón para volver a la página.', 'error')
    history.push('/')
    // si el pago sale mal no guardo nada y borro lo que se guardo en local storage!
    localStorage.clear('payment')
  }

  // localStorage.clear('payment')
  return (
    <div className="p-4">
      <FlightsSearch />
    </div>
  );
}

export default Home;
