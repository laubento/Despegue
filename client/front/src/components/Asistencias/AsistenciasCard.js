import React from "react";
import swal from "sweetalert";
import '../Asistencias/Asistencias.css'
import Basica from '../../Images/Asistencias/1.png'
import Estandar from '../../Images/Asistencias/2.png'
import Premium from '../../Images/Asistencias/3.png'
import Portada from '../../Images/Asistencias/Portada.png'
import Condiciones from '../../Images/Asistencias/Condiciones.png'
export default function AsistenciasCard() {


  function calculardiasDiscount() {
    var timeStart = new Date(document.getElementById("timeStart").value);
    var timeEnd = new Date(document.getElementById("timeEnd").value);
    var actualDate = new Date();
    if (timeEnd > timeStart) {
      var diff = timeEnd.getTime() - timeStart.getTime();
      document.getElementById("daysDiscount").value = Math.round(
        diff / (1000 * 60 * 60 * 24)
      );
    } else if (timeEnd != null && timeEnd < timeStart) {
      swal(
        "Oops...",
        "La fecha final de la promoción debe ser mayor a la fecha inicial",
        "error"
      );
      document.getElementById("daysDiscount").value = 0;
    }
  }

  return (
    <div className="Asistencias-Fondo">
      <div className="Help-ContainerPortada Asistencias-Borde">
        <img src={Portada} alt="Portada" />
      </div>
     

      <div className="Asistencias-ContainerPrincipal container d-flex justify-content-center">
        {/* <label>Fecha de inicio</label>
            <input type="date" id="timeStart" className="form-control" onInput={calculardiasDiscount} />
            <label>Fecha fin</label>
            <input type="date" id="timeEnd" class="form-control" onInput={calculardiasDiscount} />
            <label>Días</label>
            <input class="form-control" id="daysDiscount"></input> */}

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
        </div>

        <div className="Asistencias-Container">
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
        </div>

        <div className="Asistencias-Container">
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
        </div>

      </div>
      <div className="container Asistencias-Condiciones">
        <img  src={Condiciones}/>
      </div>
    </div>
  );
}
