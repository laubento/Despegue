import React, { useEffect } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/Record.css'
import { useDispatch } from "react-redux";
import { clearCart, clearFlights, getFlights } from "../../Redux/Actions";
import { useHistory } from "react-router-dom";
// import img from '../../Images/historialBusqueda.jpg'

export default function Record() {
    let dispatch = useDispatch()
    let history = useHistory()
    let record = JSON.parse(localStorage.getItem('record'))
    let names = JSON.parse(localStorage.getItem('names'))

    // useEffect(e =>{
    //     dispatch(clearFlights())
    // },[dispatch])

    const handleClick = (e) => {
        e.preventDefault();
        localStorage.setItem('busqueda', JSON.stringify(record[e.target.value]))
        dispatch(getFlights(record[e.target.value]));
        
        if (record.tripType === 'onewaytrip') {
            history.push('/flights');
        } else {
            history.push('/flights/roundtrip/firstFlight');
        }
        localStorage.setItem('tripType', record[e.target.value].tripType)
        // dispatch(clearCart())
        dispatch(clearFlights())
    }

    return (

        <div className="container-record">
            {record && names ?
                <div>
                    <h4>Busqueda Reciente</h4>
                    <div class="row text-light">
                        {record.map((e, i) => {
                            if (i > 2) return;
                            return (
                                <div class="col-sm-3">
                                    <div class="card" id="record-card">
                                        <div class="card-body">
                                            {e.tripType === "roundtrip" ? <h6 className="p-1">Vuelo Ida y vuelta</h6> : <h6 className="p-1">Vuelo Ida</h6>}
                                            <h5 className="card-title p-1">{names[i].arrivalAirportName[0]}</h5>
                                            <h6 className="p-1">Desde {names[i].departureAirportName[0]}</h6>
                                            <button type="button" className="btn btn-outline-light" value={i} onClick={e => handleClick(e)}>Seguir buscando <ArrowForwardIosIcon /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div> : null}
        </div>
    )
}
