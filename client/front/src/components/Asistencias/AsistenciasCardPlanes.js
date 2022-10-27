import React from "react";
import Basica from '../../Images/Asistencias/1.png'
import Estandar from '../../Images/Asistencias/2.png'
import Premium from '../../Images/Asistencias/3.png'

export default function AsistenciasCardPlanes({ asistencia, info }) {
    console.log(info)
    var fechaInicio = info ? new Date(info.departureDate).getTime() : null;
    var fechaFin = info ? new Date(info.returningDate).getTime() : null;
    var diff = fechaFin - fechaInicio;

    let basica = info ? (6 * info.adults + 3 * info.children + 1 * info.infants) * diff / (1000 * 60 * 60 * 24) : null
    let estandar = info ? (13 * info.adults + 6 * info.children + 2 * info.infants) * diff / (1000 * 60 * 60 * 24) : null
    let premium = info ? (19 * info.adults + 8 * info.children + 3 * info.infants) * diff / (1000 * 60 * 60 * 24) : null

    console.log(diff / (1000 * 60 * 60 * 24));

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
                                            <h3 className="m-0 Asistencias-PrecioTotal">${(6 * info.adults + 3 * info.children + 1 * info.infants) * 7} <label><h4 className="Asistencias-dias">x7 dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                            <button className="Asistencias-Selec">Seleccionar</button>
                                        </div>
                                        <hr className="m-1 " />
                                        <div className="d-flex justify-content-between">
                                            <h3 className="m-0 Asistencias-PrecioTotal">${(6 * info.adults + 3 * info.children + 1 * info.infants) * 14} <label><h4 className="Asistencias-dias">x14 dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                            <button className="Asistencias-Selec">Seleccionar</button>
                                        </div>
                                        <hr className="m-1 " />
                                        <div className="d-flex justify-content-between">
                                            <h3 className="m-0 Asistencias-PrecioTotal">${(6 * info.adults + 3 * info.children + 1 * info.infants) * 30} <label><h4 className="Asistencias-dias">x30 dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                            <button className="Asistencias-Selec">Seleccionar</button>
                                        </div>
                                    </div>
                                    :
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${basica} <label><h4 className="Asistencias-dias">x{diff / (1000 * 60 * 60 * 24)} dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                        <button className="Asistencias-Selec">Seleccionar</button>
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
                                        <h3 className="m-0 Asistencias-PrecioTotal">${(13 * info.adults + 6 * info.children + 2 * info.infants) * 7} <label><h4 className="Asistencias-dias">x7 dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                        <button className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                    <hr className="m-1 " />
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${(13 * info.adults + 6 * info.children + 2 * info.infants) * 14} <label><h4 className="Asistencias-dias">x14 dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                        <button className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                    <hr className="m-1 " />
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${(13 * info.adults + 6 * info.children + 2 * info.infants) * 30} <label><h4 className="Asistencias-dias">x30 dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                        <button className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                </div>
                                : <div className="d-flex justify-content-between">
                                    <h3 className="m-0 Asistencias-PrecioTotal">${estandar} <label><h4 className="Asistencias-dias">x{diff / (1000 * 60 * 60 * 24)} dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                    <button className="Asistencias-Selec">Seleccionar</button>
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
                                        <h3 className="m-0 Asistencias-PrecioTotal">${(19 * info.adults + 8 * info.children + 3 * info.infants) * 7} <label><h4 className="Asistencias-dias">x7 dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                        <button className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                    <hr className="m-1 " />
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${(19 * info.adults + 8 * info.children + 3 * info.infants) * 14} <label><h4 className="Asistencias-dias">x14 dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                        <button className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                    <hr className="m-1 " />
                                    <div className="d-flex justify-content-between">
                                        <h3 className="m-0 Asistencias-PrecioTotal">${(19 * info.adults + 8 * info.children + 3 * info.infants) * 30} <label><h4 className="Asistencias-dias">x30 dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                        <button className="Asistencias-Selec">Seleccionar</button>
                                    </div>
                                </div>
                                : <div className="d-flex justify-content-between">
                                    <h3 className="m-0 Asistencias-PrecioTotal">${premium} <label><h4 className="Asistencias-dias">x{diff / (1000 * 60 * 60 * 24)} dias</h4>x {info.adults + info.children + info.infants} persona/s</label></h3>
                                    <button className="Asistencias-Selec">Seleccionar</button>
                                </div>}
                        </div>
                    </div>
                </div> : null}
            </div> : null}


        </div>
    )
}