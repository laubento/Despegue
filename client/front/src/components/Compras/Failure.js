import React from 'react'
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'

function Failure(props) {
    const history = useHistory()
    const query = new URLSearchParams(props.location.search);
    // const user = useSelector(state => state.user)
    const status = query.get('status')
    if(status === 'null') {
        swal('Algo ha salido mal!', 'Presiona el botón para volver a la página.', 'error')
          // si el pago sale mal no guardo nada y borro lo que se guardo en local storage!
          localStorage.removeItem('sinLog')
          localStorage.removeItem('cartRespaldo')
          localStorage.removeItem('detail')
          localStorage.removeItem('init_point')
          localStorage.removeItem('asistant')
          localStorage.removeItem('busqueda')
          history.push('/')
        }
  return (
    <div>
        <h1 className='text-center'>COMPRA RECHAZADA</h1>
    </div>
  )
}

export default Failure