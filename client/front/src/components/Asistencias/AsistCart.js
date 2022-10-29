import React from "react";
import Basica from '../../Images/Asistencias/1.png'
import Estandar from '../../Images/Asistencias/2.png'
import Premium from '../../Images/Asistencias/3.png'
import Ninguna from '../../Images/Asistencias/4.png'
import '../Asistencias/Asistencias.css'

export default function AsistCard({ obj }) {

    console.log('a', obj)
    return (
        <div>
            {obj === null ? '' : 
             <div className="d-flex Asistencia-ContainerPreCompra">
             {obj.type === "Basica" ? <img src={Basica} alt="Asistencia" /> : null}
             {obj.type === "Basica" ?
                 <div className="p-2 Asistencias-Info Asistencia-InfoPreCompra">
                     <p>✔ Cobertura médica ante coronavirus y reintegro por gastos de cancelación o interrupción del viaje</p>
                     <p>✔ Asistencia médica ante enfermedad o accidente hasta US$50.000</p>
                     <p>✔ Gastos de hotel en caso de cuarentena en destino hasta US$500</p>
                     <p>✔ Compensación por pérdida de equipaje hasta US$ 1.000</p>
                 </div> : null}
 
             {obj.type === "Estandar" ? <img src={Estandar} alt="Asistencia" /> : null}
             {obj.type === "Estandar" ?
                 <div className="p-2 Asistencias-Info Asistencia-InfoPreCompra">
                     <p>✔ Cobertura médica ante coronavirus y reintegro por gastos de cancelación o interrupción del viaje</p>
                     <p>✔ Asistencia médica ante enfermedad o accidente hasta US$ 150.000</p>
                     <p>✔ Gastos de hotel en caso de cuarentena en destino hasta US$ 1.000</p>
                     <p>✔ Compensación por demora de vuelo hasta US$ 150</p>
                 </div> : null}
 
             {obj.type === "Premium" ? <img src={Premium} alt="Asistencia" /> : null}
             {obj.type === "Premium" ?
                 <div className="p-2 Asistencias-Info Asistencia-InfoPreCompra">
                     <p>✔ Cobertura médica ante coronavirus y reintegro por gastos de cancelación o interrupción del viaje</p>
                     <p>✔ Asistencia médica ante enfermedad o accidente hasta US$ 350.000</p>
                     <p>✔ Gastos de hotel en caso de cuarentena en destino hasta US$ 1.500</p>
                     <p>✔ Compensación por demora de vuelo hasta US$ 200</p>
                 </div> : null}
 
             {obj.type === "Ninguna" ? <img src={Ninguna} alt="Asistencia" /> : null}
             {obj.type === "Ninguna" ?
                 <div className="p-2 Asistencias-Info Asistencia-InfoPreCompra">
                     <p>❌ Cobertura médica ante coronavirus y reintegro por gastos de cancelación o interrupción del viaje</p>
                     <p>❌ Asistencia médica ante enfermedad o accidente</p>
                     <p>❌ Gastos de hotel en caso de cuarentena en destino</p>
                     <p>❌ Compensación por pérdida de equipaje</p>
                     <p>❌ Compensación por demora de vuelo</p>
                 </div> : null}
 
             <div>
                 <div className="p-2 Asistencias-Info">
                     <h5 className="m-0">Informacion</h5>
                     <p>Asistencia: <b>{obj.type}</b></p>
                     <p>Dias: <b>{obj.days}</b></p>
                     <p>Personas: <b>{obj.people}</b></p>
                     <hr className="m-0" />
                     <p className="Asistencia-PreCompraPrice">TOTAL: $<h5 className="m-0"><b>{obj.price}</b></h5></p>
                 </div>
             </div>
         </div>
            }
        
       
        </div>
    )
}