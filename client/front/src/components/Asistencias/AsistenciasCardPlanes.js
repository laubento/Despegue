import React from "react";
import Basica from '../../Images/Asistencias/1.png'
import Estandar from '../../Images/Asistencias/2.png'
import Premium from '../../Images/Asistencias/3.png'


export default function AsistenciasCardPlanes({ asistencia }) {


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
            </div> : null}



        </div>
    )
}