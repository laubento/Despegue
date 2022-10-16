import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import '../styles/CardDetail.css';

export default function CardDetail(){

    const flightDetail = useSelector( (state) => state.flightDetail);
    const history = useHistory();
    const handleClick = () => {
        history.push('/flights');
    }

    const minutesToHrsMins = (time) => {
        const hs = Math.floor(time/60);
        const mins = time%60;
        return `${hs} h ${mins} m`;
    }

    return(
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-6">
                    <button className='btn btn-md btn-secondary' onClick={handleClick}>Volver</button>
                </div>
            </div>
            {
                flightDetail[0].segments.map( (el, i) => {
                    const {airlineCode, arrivalAirportCode, arrivalDateTime, cabin, departureAirportCode, departureDateTime, designatorCode, durationMinutes, stopoverDurationMinutes} = el;
                    let departureDate = departureDateTime.slice(0,10);
                    let departureTime = departureDateTime.slice(11,16);
                    let departureUTM = departureDateTime.slice(23,26);
                    let arrivalDate = arrivalDateTime.slice(0,10);
                    let arrivalTime = arrivalDateTime.slice(11,16);
                    let arrivalUTM = arrivalDateTime.slice(23,26);
                    let flightCode = designatorCode.slice(0,2)+'-'+designatorCode.slice(2);
                    let duration = minutesToHrsMins(durationMinutes);
                    let stopoverDuration = minutesToHrsMins(stopoverDurationMinutes);
                    let cabinClass = cabin.charAt(0).toUpperCase()+cabin.slice(1);
                    return(
                        <div key={i} className="container mt-5 mb-5">
                            <div className="d-flex justify-content-center row">
                                <div className="col-md-6">
                                    <div className="card border-0">
                                        <div className="card-body d-flex flex-column justify-content-between text-white p-0">
                                            <div className="p-4 bg-top">
                                                <div className="d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-column justify-content-between align-items-center">
                                                        <h1>{departureAirportCode}</h1><span>{departureDate}</span><span>{departureTime} hs UTM{departureUTM}</span></div>
                                                    <div className="d-flex flex-column justify-content-center"><i className="fa fa-plane fa-3x">{airlineCode}</i></div>
                                                    <div className="d-flex flex-column justify-content-between align-items-center">
                                                        <h1>{arrivalAirportCode}</h1><span>{arrivalDate}</span><span>{arrivalTime} hs UTM{arrivalUTM}</span></div>
                                                </div>
                                            </div>
                                            <div className="bg-danger p-4">
                                                <div className="d-flex flex-column justify-content-between">
                                                    <div className="d-flex flex-row justify-content-between text-center">
                                                        <div><span className="d-block font-weight-bold">Código de vuelo</span><span>{flightCode}</span></div>
                                                        <div><span className="d-block font-weight-bold">Duración</span><span>{duration}</span></div>
                                                        <div><span className="d-block font-weight-bold">Clase</span><span>{cabinClass}</span></div>
                                                        {
                                                            stopoverDurationMinutes > 0 
                                                                ? <div><span className="d-block font-weight-bold">Duración de la escala</span><span>{stopoverDuration}</span></div>
                                                                : null
                                                        }                                                        
                                                    </div>
                                                    <div className="doted-lines">
                                                        <hr className="dotted-line"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    })
                }
            
        </div>
    )
}
    