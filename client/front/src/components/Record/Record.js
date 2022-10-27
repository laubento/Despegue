import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/Record.css'
import { useDispatch } from "react-redux";
import { clearFlights, getFlights } from "../../Redux/Actions";
import { useHistory } from "react-router-dom";
// import img from '../../Images/historialBusqueda.jpg'

export default function Record() {
    let dispatch = useDispatch()
    let history = useHistory()
    let record = JSON.parse(localStorage.getItem('record'))
    let names = JSON.parse(localStorage.getItem('names'))


    const handleClick = (e) => {
        dispatch(getFlights(record));
        dispatch(clearFlights())
        if (record.tripType === 'onewaytrip') {
            history.push('/flights');
        } else {
            history.push('/flights/roundtrip/firstFlight');
        }
    }
    
    return (

        <div className="container-record">
            {record && names ?
                <div>
                    <h4>Busqueda Reciente</h4>
                    <div class="row text-light">
                        <div class="col-sm-3">
                            <div class="card" id="record-card">
                                <div class="card-body">
                                    {record.tripType === "roundtrip" ? <h6 className="p-1">Vuelo Ida y vuelta</h6> : <h6 className="p-1">Vuelo Ida</h6>}
                                    <h5 className="card-title p-1">{names.arrivalAirportName[0]}</h5>
                                    <h6 className="p-1">Desde {names.departureAirportName[0]}</h6>
                                    <button type="button" className="btn btn-outline-light" onClick={e => handleClick(e)}>Seguir buscando <ArrowForwardIosIcon /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null}
        </div>
    )
}
