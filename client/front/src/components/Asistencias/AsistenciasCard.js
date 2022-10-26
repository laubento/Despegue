import React from "react";
import swal from "sweetalert";
import '../Asistencias/Asistencias.css'
import Basica from '../../Images/Asistencias/1.png'
import Estandar from '../../Images/Asistencias/2.png'
import Premium from '../../Images/Asistencias/3.png'
import Portada from '../../Images/Asistencias/Portada.png'
import Condiciones from '../../Images/Asistencias/Condiciones.png'
import AsistenciasCardPlanes from "./AsistenciasCardPlanes";
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
        <AsistenciasCardPlanes asistencia={'Basica'} />
        <AsistenciasCardPlanes asistencia={'Estandar'} />
        <AsistenciasCardPlanes asistencia={'Premium'} />
      </div>
      <div className="container Asistencias-Condiciones">
        <img src={Condiciones} />
      </div>
    </div>
  );
}
