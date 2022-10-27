import React from "react";
import AsistenciasCardPlanes from "./AsistenciasCardPlanes";
import Condiciones from '../../Images/Asistencias/Condiciones.png'

export default function CompraAsistencias() {
    const Info = JSON.parse(window.localStorage.getItem("busqueda"));


    return (
        <div>
            <div className="MiPerfil-containerTituloPrincipal">
                <h1>Escoger Asistencias</h1>
            </div>
            <div className="Asistencias-ContainerCompra">
                <div>
                    <AsistenciasCardPlanes asistencia={'Basica'} info={Info}/>
                </div>
                <div><AsistenciasCardPlanes asistencia={'Estandar'} info={Info}/></div>
                <div><AsistenciasCardPlanes asistencia={'Premium'} info={Info}/></div>
            </div>
            <div className="container Asistencias-Condiciones">
                <img src={Condiciones} />
            </div>
        </div>
    )
}