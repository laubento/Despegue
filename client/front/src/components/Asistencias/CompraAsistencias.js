import React from "react";
import AsistenciasCardPlanes from "./AsistenciasCardPlanes";
import Condiciones from '../../Images/Asistencias/Condiciones.png'
import { setAsistencias } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export default function CompraAsistencias() {
    const Info = JSON.parse(window.localStorage.getItem("busqueda"));
    const dispatch = useDispatch();
    const history = useHistory();
    function handleClick(asistencia, precio, dias, personas) {
        let obj = {
            type: asistencia,
            price: precio,
            days: dias,
            people: personas
        }
        dispatch(setAsistencias(obj))
        localStorage.setItem('asistant', JSON.stringify(obj))
        history.push('/flights/roundtrip/cart')
    }

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
            <div className="Asistencia-Pobres">
                <button onClick={(e) => { handleClick("Ninguna", 0 , "0", 0) }}>Continuar sin asistencia</button>
            </div>
            <div className="container Asistencias-Condiciones">
                <img src={Condiciones} />
            </div>
        </div>
    )
}