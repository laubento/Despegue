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
  return (
    <div className="Asistencias-Fondo">
      <div className="Help-ContainerPortada Asistencias-Borde">
        <img src={Portada} alt="Portada" />
      </div>


      <div className="Asistencias-ContainerPrincipal container d-flex justify-content-center">
        <AsistenciasCardPlanes asistencia={'Basica'} info={null}/>
        <AsistenciasCardPlanes asistencia={'Estandar'} info={null}/>
        <AsistenciasCardPlanes asistencia={'Premium'} info={null}/>
      </div>
      <div className="container Asistencias-Condiciones">
        <img src={Condiciones} />
      </div>
    </div>
  );
}
