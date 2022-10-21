import Logo from "../../Images/Logo.png";
import Avion from "../../Images/avion.png";
import Auriculares from "../../Images/auricular.png";
import Persona from "../../Images/persona.png";
import Ayuda from "../../Images/boton-web-de-ayuda.png";
import Valija from "../../Images/valija.png";
import Ofertas from "../../Images/fuego.png";
import Asistencias from "../../Images/botiquin.png";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { ReactReduxContext, useSelector } from "react-redux";
import React from "react";

export default function NavBar() {
    const { loginWithRedirect, logout } = useAuth0();

    let url = window.location.pathname;

    let user = useSelector((state) => state.user);
    const user2 = JSON.parse(window.localStorage.getItem("user"));

    if (!user && user2) user = user2;

    function handleSubmitLogOut() {
        window.open("http://localhost:3001/auth/logout", "_self");
        alert("Cerrando sesion");
    }

    return (
        <div className='NavBar-header'>
            <div className='container-fluid NavBar-ContainerPrincipal'>
                <Link to={"/"}>
                    <a className='NavBar-Logo' href='#'>
                        <img className='NavBar-ImgLogo' alt='Logo' src={Logo} />
                        Despegue
                    </a>
                </Link>
                <div className='NavBar-ContainerButton'>
                    <Link
                        to={"/"}
                        className={
                            url == "/"
                                ? "NavBar-LinBotonActive"
                                : "NavBar-LinkBoton"
                        }
                    >
                        <img
                            className='NavBar-LogoBoton'
                            src={Avion}
                            alt='avion'
                        />
                        <div className='NavBar-Boton1'>Vuelos</div>
                    </Link>
                    <Link
                        to={"/ofertas"}
                        className={
                            url == "/ofertas"
                                ? "NavBar-LinBotonActive"
                                : "NavBar-LinkBoton"
                        }
                    >
                        <img
                            className='NavBar-LogoBoton'
                            src={Ofertas}
                            alt='avion'
                        />
                        <div className='NavBar-Boton1'>Ofertas</div>
                    </Link>
                    <Link
                        to={"/asistencias"}
                        className={
                            url == "/asistencias"
                                ? "NavBar-LinBotonActive"
                                : "NavBar-LinkBoton"
                        }
                    >
                        <img
                            className='NavBar-LogoBoton'
                            src={Asistencias}
                            alt='avion'
                        />
                        <div className='NavBar-Boton1'>Asistencia</div>
                        {/* <div className='NavBar-Nuevo'>Nuevo</div> */}
                    </Link>
                </div>
                <div className='NavBar-Info'>
                    <ul className='NavBar-Ul'>
                        <li className='NavBar-Ventas'>
                            <Link to={"/"}>
                                <img alt='ventas' src={Auriculares} />
                                Ventas <p> 0810 810 9992</p>
                            </Link>
                        </li>

                        <li
                            style={{ cursor: "pointer" }}
                            className='NavBar-IniciarSesion'
                        >
                            {!user ? (
                                <b onClick={() => loginWithRedirect()}>
                                    {/* <Link to={"/login"}> */}
                                    <img alt='ventas' src={Persona} />
                                    Iniciar Sesion
                                    {/* </Link> */}
                                </b>
                            ) : (
                                <Link
                                    className='Login-UsuarioDesplegable'
                                    to={"/"}
                                >
                                    <img alt='ventas' src={Persona} />
                                    {user.firstName}
                                    <div className='Login-Desplegable'>
                                        <div className='Login-DesplegableContainerImg'>
                                            <img
                                                src={user ? user.photos : null}
                                                alt=''
                                            />
                                            <h6>{`Bienvenido ${user.firstName}!`}</h6>
                                        </div>
                                        <hr />
                                        <div className='Login-DesplegableContainerBoton'>
                                            <Link
                                                to={"/user"}
                                                className='Login-DesplegableBoton'
                                            >
                                                Mi perfil
                                            </Link>
                                            <hr />
                                            <Link
                                                to={"/user/travels"}
                                                className='Login-DesplegableBoton'
                                            >
                                                Mis viajes
                                            </Link>
                                            <hr />
                                            <button
                                                onClick={() => {
                                                    logout({
                                                        returnTo:
                                                            window.location
                                                                .origin,
                                                    });
                                                    window.localStorage.removeItem(
                                                        "user"
                                                    );
                                                }}
                                                className='Login-DesplegableBoton'
                                            >
                                                Cerrar sesion
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </li>
                        <li className='NavBar-MisViajes'>
                            {user ? (
                                <Link to={"/user/travels"}>
                                    <img alt='ventas' src={Valija} />
                                    Mis Viajes
                                </Link>
                            ) : (
                                <Link to={"/login"}>
                                    <img alt='ventas' src={Valija} />
                                    Mis Viajes
                                </Link>
                            )}
                        </li>
                        <li className='NavBar-Ayuda'>
                            <Link to={"/"}>
                                <img alt='ventas' src={Ayuda} />
                                Ayuda
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
