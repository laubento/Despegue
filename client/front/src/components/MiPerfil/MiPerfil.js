import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import '../MiPerfil/MiPerfil.css'
import DatosPersonales from "./DatosPersonales";
import Configuracion from "./Configuracion";
import { useSelector } from "react-redux";
import UserHistory from "./userHistory";


export default function MiPerfil() {


    let user = useSelector((state) => state.user);
    const user2 = JSON.parse(window.localStorage.getItem("user"));
  
    if (!user && user2) user = user2;

    let url = window.location.pathname

    function suscribirme(){
        
    }
    function desSuscribirme(){

    }

    return (
        <div>
            <div className="MiPerfil-containerTituloPrincipal">
                <h1>Mi perfil</h1>
            </div>
            <div className="MiPerfil-containerInfoPrincipal">
                <div className="MiPerfil-ContainerDatos">
                    <div className="MiPerfil-containerFoto">
                        <img src={user ? user.photos : undefined } alt="perfil" />
                        <div>
                            <h4>Hola,</h4>
                            <h3>{user ? user.firstName.toUpperCase() : undefined}</h3>
                           {user ? <h3>{user.lastName ? user.lastName.toUpperCase() : undefined}</h3> : undefined}
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
                    <Route exact path={'/user/config'} render={() => <Configuracion />} />
                    <Route exact path={'/user/travels'} render={() => <UserHistory />} />
                </div>
            </div>
            <div className="MiPerfil-Ofertas">
                <h2>Desea que se le notifique por gmail las ofertas?</h2>
                <button onClick={suscribirme} className="MiPerfil-Sub">SUSCRIBIRME</button>
                <button onClick={desSuscribirme} className="MiPerfil-DesSub">DESUSCRIBIRME</button>
            </div>
        </div>
    )
}
