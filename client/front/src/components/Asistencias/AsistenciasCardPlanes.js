import React from "react";
import Basica from '../../Images/Asistencias/1.png'
import Estandar from '../../Images/Asistencias/2.png'
import Premium from '../../Images/Asistencias/3.png'
import { setAsistencias } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';

export default function AsistenciasCardPlanes({ asistencia, info }) {
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(info)
    var fechaInicio = info ? new Date(info.departureDate).getTime() : null;
    var fechaFin = info ? new Date(info.returningDate).getTime() : null;
    var diff = fechaFin - fechaInicio;

    let basica = info ? (6 * info.adults + 3 * info.children + 1 * info.infants) * diff / (1000 * 60 * 60 * 24) : null
    let estandar = info ? (13 * info.adults + 6 * info.children + 2 * info.infants) * diff / (1000 * 60 * 60 * 24) : null
    let premium = info ? (19 * info.adults + 8 * info.children + 3 * info.infants) * diff / (1000 * 60 * 60 * 24) : null
    let basicaSimple = info ? 6 * info.adults + 3 * info.children + 1 * info.infants : null
    let estandarSimple = info ? 13 * info.adults + 6 * info.children + 2 * info.infants : null
    let premiumSimple = info ? 19 * info.adults + 8 * info.children + 3 * info.infants : null
    let total = info ? info.adults + info.children + info.infants : null
    console.log(diff / (1000 * 60 * 60 * 24));

    function handleClick(asistencia, precio, dias, personas) {
        let obj = {
            type: asistencia,
            price: precio,
            days: dias,
            people: personas,
            asistant: true
        }
        dispatch(setAsistencias(obj))
        localStorage.setItem('asistant', JSON.stringify(obj))
        history.push('/flights/roundtrip/cart')
    }


    return (
        <div>
            {asistencia === 'Basica' ?
                <div className="Asistencias-Container">
                    <div className="Asistencias-Cabecera">
                        <img className="Asistencias-IMG" src={Basica} alt="Asistencias" />
                        <hr className="m-0" />
                    </div>
                    <div className="p-2 Asistencias-Info">
                        <p>✔ Cobertura médica ante coronavirus y reintegro por gastos de cancelación o interrupción del viaje</p>
                        <p>✔ Asistencia médica ante enfermedad o accidente hasta US$50.000</p>
                        <p>✔ Gastos de hotel en caso de cuarentena en destino hasta US$500</p>
                        <p>✔ Compensación por pérdida de equipaje hasta US$ 1.000</p>
                    </div>
                    <hr className="m-0" />
                    <div className="Asistencias-ContainerPrecio p-2">
                        <p className="m-1">Precio por persona</p>
                        <h5 className="m-0">$6 <label>x dia</label></h5>
                    </div>
                    {info !== null ? <div>
                        <hr className="m-0" />
                        <div className=" p-2 ">
                            <div className="d-flex justify-content-center">
                                <p className="m-1"><b>PRECIO FINAL TOTAL</b></p>
                            </div>
                            <div>
                                {info.returningDate === ""
                                    ?
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <h3 className="m-0 Asistencias-PrecioTotal">${basicaSimple * 7} <label><h4 className="Asistencias-dias">x7 dias</h4>x {total} persona/s</label></h3>
                                            <button onClick={(e) => { handleClick("Basica", basicaSimple * 7, "7", total) }} className="Asistencias-Selec">Seleccionar</button>
                                        </div>
                                        <hr className="m-1 " />
                                        <div className="d-flex justify-content-between">
                                            <h3 className="m-0 Asistencias-PrecioTotal">${basicaSimple * 14} <label><h4 className="Asistencias-dias">x14 dias</h4>x {total} persona/s</label></h3>
                                            <button onClick={(e) => { handleClick("Basica", basicaSimple * 14, "14", total) }} className="Asistencias-Selec">Seleccionar</button>
                                        </div>
                                        <hr className="m-1 " />
                                        <div className="d-flex justify-content-between">
                                            <h3 className="m-0 Asistencias-PrecioTotal">${basicaSimple * 30} <label><h4 className="Asistencias-dias">x30 dias</h4>x {total} persona/s</label></h3>
                                            <button onClick={(e) => { handleClick("Basica", basicaSimple * 30, "30", total) }} className="Asistencias-Selec">Seleccionar</button>
                                        </div>
                                    </div>
                                    :
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${basica} <label><h4 className="Asistencias-dias">x{diff / (1000 * 60 * 60 * 24)} dias</h4>x {total} persona/s</label></h3>
                                        <button onClick={(e) => { handleClick("Basica", basica, diff / (1000 * 60 * 60 * 24), total) }} className="Asistencias-Selec">Seleccionar</button>
                                    </div>}
                            </div>
                        </div>
                    </div> : null}
                </div> : null}

            {asistencia === 'Estandar' ? <div className="Asistencias-Container">
                <div className="Asistencias-Cabecera">
                    <img className="Asistencias-IMG" src={Estandar} alt="Asistencias" />
                    <p>{`Recomendada`}</p>
                    <hr className="m-0" />
                </div>
                <div className="p-2 Asistencias-Info">
                    <p>✔ Cobertura médica ante coronavirus y reintegro por gastos de cancelación o interrupción del viaje</p>
                    <p>✔ Asistencia médica ante enfermedad o accidente hasta US$ 150.000</p>
                    <p>✔ Gastos de hotel en caso de cuarentena en destino hasta US$ 1.000</p>
                    <p>✔ Compensación por demora de vuelo hasta US$ 150</p>
                </div>
                <hr className="m-0" />
                <div className="Asistencias-ContainerPrecio p-2">
                    <p className="m-1">Precio por persona</p>
                    <h5 className="m-0">$13 <label>x dia</label></h5>
                </div>
                {info !== null ? <div>
                    <hr className="m-0" />
                    <div className=" p-2 ">
                        <div className="d-flex justify-content-center">
                            <p className="m-1"><b>PRECIO FINAL TOTAL</b></p>
                        </div>
                        <div>
                            {info.returningDate === ""
                                ?
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${estandarSimple * 7} <label><h4 className="Asistencias-dias">x7 dias</h4>x {total} persona/s</label></h3>
                                        <button onClick={(e) => { handleClick("Estandar", estandarSimple * 7, "7", total) }} className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                    <hr className="m-1 " />
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${estandarSimple * 14} <label><h4 className="Asistencias-dias">x14 dias</h4>x {total} persona/s</label></h3>
                                        <button onClick={(e) => { handleClick("Estandar", estandarSimple * 14, "14", total) }} className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                    <hr className="m-1 " />
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${estandarSimple * 30} <label><h4 className="Asistencias-dias">x30 dias</h4>x {total} persona/s</label></h3>
                                        <button onClick={(e) => { handleClick("Estandar", estandarSimple * 30, "30", total) }} className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                </div>
                                : <div className="d-flex justify-content-between">
                                    <h3 className="m-0 Asistencias-PrecioTotal">${estandar} <label><h4 className="Asistencias-dias">x{diff / (1000 * 60 * 60 * 24)} dias</h4>x {total} persona/s</label></h3>
                                    <button onClick={(e) => { handleClick("Estandar", estandar, diff / (1000 * 60 * 60 * 24), total) }} className="Asistencias-Selec">Seleccionar</button>
                                </div>}
                        </div>
                    </div>
                </div> : null}
            </div> : null}

            {asistencia === 'Premium' ? <div className="Asistencias-Container">
                <div className="Asistencias-Cabecera">
                    <img className="Asistencias-IMG" src={Premium} alt="Asistencias" />
                    <p>{`Mas Popular`}</p>
                    <hr className="m-0" />
                </div>
                <div className="p-2 Asistencias-Info">
                    <p>✔ Cobertura médica ante coronavirus y reintegro por gastos de cancelación o interrupción del viaje</p>
                    <p>✔ Asistencia médica ante enfermedad o accidente hasta US$ 350.000</p>
                    <p>✔ Gastos de hotel en caso de cuarentena en destino hasta US$ 1.500</p>
                    <p>✔ Compensación por demora de vuelo hasta US$ 200</p>
                </div>
                <hr className="m-0" />
                <div className="Asistencias-ContainerPrecio p-2">
                    <p className="m-1">Precio por persona</p>
                    <h5 className="m-0">$19 <label>x dia</label></h5>
                </div>
                {info !== null ? <div>
                    <hr className="m-0" />
                    <div className=" p-2 ">
                        <div className="d-flex justify-content-center">
                            <p className="m-1"><b>PRECIO FINAL TOTAL</b></p>
                        </div>
                        <div>
                            {info.returningDate === ""
                                ?
                                <div>
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${premiumSimple * 7} <label><h4 className="Asistencias-dias">x7 dias</h4>x {total} persona/s</label></h3>
                                        <button onClick={(e) => { handleClick("Premium", premiumSimple * 7, "7", total) }} className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                    <hr className="m-1 " />
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${premiumSimple * 14} <label><h4 className="Asistencias-dias">x14 dias</h4>x {total} persona/s</label></h3>
                                        <button onClick={(e) => { handleClick("Premium", premiumSimple * 14, "14", total) }} className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                    <hr className="m-1 " />
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${premiumSimple * 30} <label><h4 className="Asistencias-dias">x30 dias</h4>x {total} persona/s</label></h3>
                                        <button onClick={(e) => { handleClick("Premium", premiumSimple * 30, "30", total) }} className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                </div>
                                : <div className="d-flex justify-content-between">
                                    <h3 className="m-0 Asistencias-PrecioTotal">${premium} <label><h4 className="Asistencias-dias">x{diff / (1000 * 60 * 60 * 24)} dias</h4>x {total} persona/s</label></h3>
                                    <button onClick={(e) => { handleClick("Premium", premium, diff / (1000 * 60 * 60 * 24), total) }} className="Asistencias-Selec">Seleccionar</button>
                                </div>}
                        </div>
                    </div>
                </div> : null}
            </div> : null}
        </div>
    )
}