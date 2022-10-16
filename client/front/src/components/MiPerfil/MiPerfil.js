import React from "react";
import { Link } from "react-router-dom";
import '../MiPerfil/MiPerfil.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import { Route } from "react-router-dom";
import DatosPersonales from "./DatosPersonales";
import { useSelector } from "react-redux";

export default function MiPerfil() {

    const user = useSelector(state => state.user)
    
    let url = window.location.pathname
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    function login() {

    }
    return (
        <div>
            <div className="MiPerfil-containerTituloPrincipal">
                <h1>Mi perfil</h1>
            </div>
            <div className="MiPerfil-containerInfoPrincipal">

                <div className="MiPerfil-ContainerDatos">
                    <div className="MiPerfil-containerFoto">
                        <img src={user ? user.photos : null } alt="perfil" />
                        <div>
                            <h4>Hola,</h4>
                            <h3>{user ? user.name.toUpperCase() : null}</h3>
                            {/* <h3>{user ? user.name.toUpperCase() : null}</h3> */}
                        </div>
                    </div>
                    <div className="MiPerfil-containerChangeBox">
                        <Link to={'/user'} className={url === '/user' ? "MiPerfil-ChangeBox MiPerfil-ChangeBoxActive" : "MiPerfil-ChangeBox"}><h5>Datos Personales</h5></Link>
                        <hr />
                        <Link to={'/user/travels'} className={url === '/user/travels' ? "MiPerfil-ChangeBox MiPerfil-ChangeBoxActive" : "MiPerfil-ChangeBox"}><h5>Registro de viajes</h5></Link>
                        <hr />
                        <Link to={'/user/config'} className={url === '/user/config' ? "MiPerfil-ChangeBox MiPerfil-ChangeBoxActive" : "MiPerfil-ChangeBox"}><h5>Configuracion de cuenta</h5></Link>
                    </div>
                </div>
                
                <div>
                    <Route exact path="/user" render={() => <DatosPersonales/>} />
                </div>
            </div>
        </div>
    )
}