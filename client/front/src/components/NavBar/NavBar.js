import Logo from "../../Images/Logo.png";
import Avion from "../../Images/avion.png";
import Auriculares from "../../Images/auricular.png";
import Persona from "../../Images/persona.png";
import Ayuda from "../../Images/boton-web-de-ayuda.png";
import Valija from "../../Images/valija.png";
import Ofertas from "../../Images/fuego.png";
import Asistencias from "../../Images/botiquin.png";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({user}) {
    let url = window.location.pathname
    console.log(url)
    return (
        <div className='NavBar-header'>
            <div className='container-fluid NavBar-ContainerPrincipal'>
                <a className='NavBar-Logo' href='#'>
                    <img className='NavBar-ImgLogo' alt='Logo' src={Logo} />
                    Despegue
                </a>
            <div className='NavBar-ContainerButton'>
                <Link to={'/'} className={url == '/' ? 'NavBar-LinBotonActive' : 'NavBar-LinkBoton'}>
                    <img className='NavBar-LogoBoton' src={Avion} alt="avion"/>
                    <div className='NavBar-Boton1'>Vuelos</div>
                </Link>
                <Link to={'/ofertas'} className={url == '/ofertas' ? 'NavBar-LinBotonActive' : 'NavBar-LinkBoton'}>
                    <img className='NavBar-LogoBoton' src={Ofertas} alt="avion"/>
                    <div className='NavBar-Boton1'>Ofertas</div>
                </Link>
                <Link to={'/asistencias'} className={url == '/asistencias' ? 'NavBar-LinBotonActive' : 'NavBar-LinkBoton'}>
                    <img className='NavBar-LogoBoton' src={Asistencias} alt="avion"/>
                    <div className='NavBar-Boton1'>Asistencia</div>
                    {/* <div className='NavBar-Nuevo'>Nuevo</div> */}
                </Link>
            </div>
            <div className='NavBar-Info'>
                <ul className='NavBar-Ul'>
                    <li className='NavBar-Ventas'>
                        <Link to={'/'}><img alt='ventas' src={Auriculares}/>Ventas <p> 0810 810 9992</p></Link>
                    </li>
                    
                    <li className='NavBar-IniciarSesion'>
                        {!user ? <Link to={'/login'}><img alt='ventas' src={Persona}/>Iniciar Sesion</Link> : <Link to={'/'}><img alt='ventas' src={Persona}/>pepe</Link>}
                        
                    </li>
                    <li className='NavBar-MisViajes'>
                        <Link to={'/'}><img alt='ventas' src={Valija}/>Mis Viajes</Link>
                    </li>
                    <li className='NavBar-Ayuda'>
                        <Link to={'/'}><img alt='ventas' src={Ayuda}/>Ayuda</Link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}
