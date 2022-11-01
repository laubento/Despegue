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
// import swal from "sweetalert";
import { useSelector } from "react-redux";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Swal from "sweetalert2";

export default function NavBar() {
    const { loginWithRedirect, logout } = useAuth0();

    let url = window.location.pathname;

    let user = useSelector((state) => state.user);
    const user2 = JSON.parse(window.localStorage.getItem("user"));

  if (!user && user2) user = user2;

  // function handleSubmitLogOut() {
  //     window.open("http://localhost:3001/auth/logout", "_self");
  //     alert("Cerrando sesion");
  // }
  function Atencion() {
    Swal.fire({
        title: "Atencion al cliente",
        text: "Lunes a viernes de 10 a 19hs - Sabado de 10 a 16hs       Atencion al cliente: 0810 810 9992",
        confirmButtonText: "Cerrar",
    });
}

const closeSession = () => {
    Swal.fire({
        title: "¿Seguro que quieres cerrar sesion?",
        icon: "warning",
        showDenyButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {
            logout({ returnTo: process.env.REACT_APP_VERCEL_URL || "http://localhost:3000" });
            window.localStorage.removeItem("user");
            window.localStorage.removeItem("sinLog");
            window.localStorage.removeItem("init_point");
            window.localStorage.removeItem("detail");
            window.localStorage.removeItem("display");
            window.localStorage.removeItem('asistant');
            window.localStorage.removeItem('cartRespaldo')
        } else if (result.isDenied) {
            Swal.fire("Gracias por quedarse");
        }
    });
};

const login = () => {
    localStorage.setItem('callbackUrl', window.location.pathname)
    loginWithRedirect({redirectUri: "http://localhost:3000/callback"})
}

  return (
    <div className="NavBar-header">
      <div className="container-fluid NavBar-ContainerPrincipal">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <a className="NavBar-Logo" href="#">
            <img className="NavBar-ImgLogo" alt="Logo" src={Logo} />
            Despegue
          </a>
        </Link>
        <div className="NavBar-ContainerButton">
          <Link
            to={"/"}
            className={
              url == "/" ? "NavBar-LinBotonActive" : "NavBar-LinkBoton"
            }
          >
            <img className="NavBar-LogoBoton" src={Avion} alt="avion" />
            <div className="NavBar-Boton1">Vuelos</div>
          </Link>
          <Link
            to={"/ofertas"}
            className={
              url == "/ofertas" ? "NavBar-LinBotonActive" : "NavBar-LinkBoton"
            }
          >
            <img className="NavBar-LogoBoton" src={Ofertas} alt="avion" />
            <div className="NavBar-Boton1">Ofertas</div>
          </Link>
          <Link
            to={"/asistencias"}
            className={
              url == "/asistencias"
                ? "NavBar-LinBotonActive"
                : "NavBar-LinkBoton"
            }
          >
            <img className="NavBar-LogoBoton" src={Asistencias} alt="avion" />
            <div className="NavBar-Boton1">Asistencia</div>
            {/* <div className='NavBar-Nuevo'>Nuevo</div> */}
          </Link>
          {user && user.roles.includes("admin") ? (
            <Link
              to={"/admin"}
              className={
                url == "/admin" ? "NavBar-LinBotonActive" : "NavBar-LinkBoton"
              }
            >
              <DashboardIcon />
              <div className="NavBar-Boton1">Admin</div>
            </Link>
          ) : null}
        </div>
        <div className="NavBar-Info">
          <ul className="NavBar-Ul">
            <li className="NavBar-Ventas">
              <button onClick={Atencion}>
                <img alt="ventas" src={Auriculares} />
                Ventas <p> 0810 810 9992</p>
              </button>
            </li>

            <li style={{ cursor: "pointer" }} className="NavBar-IniciarSesion">
              {!user ? (
                <b onClick={login}>
                  <img alt="ventas" src={Persona} />
                  Iniciar Sesion
                </b>
              ) : (
                <div className="Login-UsuarioDesplegable">
                  <img alt="user" className="Login-FotoNav" src={user.photo} />
                  {user.firstName}
                  <div className="Login-Desplegable">
                    <div className="Login-DesplegableContainerImg">
                      <img src={user ? user.photo : null} alt="" />
                      <h6>{`Bienvenido ${user.firstName}!`}</h6>
                    </div>
                    <hr />
                    <div className="Login-DesplegableContainerBoton">
                      <Link to={"/user"} className="Login-DesplegableBoton">
                        Mi perfil
                      </Link>
                      <hr />
                      <Link
                        to={"/user/travels"}
                        className="Login-DesplegableBoton"
                      >
                        Mis viajes
                      </Link>
                      <hr />
                      <button
                        onClick={closeSession}
                        className="Login-DesplegableBoton"
                      >
                        Cerrar sesion
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="NavBar-MisViajes">
              {user ? (
                <Link to={"/user/travels"}>
                  <img alt="ventas" src={Valija} />
                  Mis Viajes
                </Link>
              ) : (
                <button onClick={login}>
                  <img alt="ventas" src={Valija} />
                  Mis Viajes
                </button>
              )}
            </li>
            <li className="NavBar-Ayuda">
              <Link to={"/help"}>
                <img alt="ventas" src={Ayuda} />
                Ayuda
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
//   const user = useSelector((state) => state.user);

//   function handleSubmitLogOut() {
//     localStorage.clear()
//     window.open("http://localhost:3001/auth/logout", "_self");
//     alert("Cerrando sesion");
//   }

//   return (
//     <div className="NavBar-header">
//       <div className="container-fluid NavBar-ContainerPrincipal">
//         <Link to={"/"}>
//           <a className="NavBar-Logo" href="#">
//             <img className="NavBar-ImgLogo" alt="Logo" src={Logo} />
//             Despegue
//           </a>
//         </Link>
//         <div className="NavBar-ContainerButton">
//           <Link
//             to={"/"}
//             className={
//               url == "/" ? "NavBar-LinBotonActive" : "NavBar-LinkBoton"
//             }
//           >
//             <img className="NavBar-LogoBoton" src={Avion} alt="avion" />
//             <div className="NavBar-Boton1">Vuelos</div>
//           </Link>
//           <Link
//             to={"/ofertas"}
//             className={
//               url == "/ofertas" ? "NavBar-LinBotonActive" : "NavBar-LinkBoton"
//             }
//           >
//             <img className="NavBar-LogoBoton" src={Ofertas} alt="avion" />
//             <div className="NavBar-Boton1">Ofertas</div>
//           </Link>
//           <Link
//             to={"/asistencias"}
//             className={
//               url == "/asistencias"
//                 ? "NavBar-LinBotonActive"
//                 : "NavBar-LinkBoton"
//             }
//           >
//             <img className="NavBar-LogoBoton" src={Asistencias} alt="avion" />
//             <div className="NavBar-Boton1">Asistencia</div>
//             {/* <div className='NavBar-Nuevo'>Nuevo</div> */}
//           </Link>
//           {user? user.roles ? user.roles[0] === 'admin' ?
//             <Link
//               to={"/admin"}
//               className={
//                 url == "/admin"
//                   ? "NavBar-LinBotonActive"
//                   : "NavBar-LinkBoton"
//               }
//             >
//               <DashboardIcon />
//               <div className="NavBar-Boton1">Admin</div>
//             </Link>:null:null:null
//           }
//         </div>
//         <div className="NavBar-Info">
//           <ul className="NavBar-Ul">
//             <li className="NavBar-Ventas">
//               <Link to={"/"}>
//                 <img alt="ventas" src={Auriculares} />
//                 Ventas <p> 0810 810 9992</p>
//               </Link>
//             </li>

//             <li className="NavBar-IniciarSesion">
//               {!user ? (
//                 <Link to={"/login"}>
//                   <img alt="ventas" src={Persona} />
//                   Iniciar Sesion
//                 </Link>
//               ) : (
//                 <Link className="Login-UsuarioDesplegable" to={"/"}>
//                   <img className="NavBar-UsuarioLogo" alt="foto" src={user ? user.photos : null} />
//                   {user.firstName}
//                   <div className="Login-Desplegable">
//                     <div className="Login-DesplegableContainerImg">
//                       <img src={user ? user.photos : null} alt="" />
//                       <h6>{`Bienvenido ${user.firstName}!`}</h6>
//                     </div>
//                     <hr />
//                     <div className="Login-DesplegableContainerBoton">
//                       <Link to={"/user"} className="Login-DesplegableBoton">
//                         Mi perfil
//                       </Link>
//                       <hr />
//                       <Link
//                         to={"/user/travels"}
//                         className="Login-DesplegableBoton"
//                       >
//                         Mis viajes
//                       </Link>
//                       <hr />
//                       <button
//                         onClick={handleSubmitLogOut}
//                         className="Login-DesplegableBoton"
//                       >
//                         Cerrar sesion
//                       </button>
//                     </div>
//                   </div>
//                 </Link>
//               )}
//             </li>
//             <li className="NavBar-MisViajes">
//               {user ? (
//                 <Link to={"/user/travels"}>
//                   <img alt="ventas" src={Valija} />
//                   Mis Viajes
//                 </Link>
//               ) : (
//                 <Link to={"/login"}>
//                   <img alt="ventas" src={Valija} />
//                   Mis Viajes
//                 </Link>
//               )}
//             </li>
//             <li className="NavBar-Ayuda">
//               <Link to={"/"}>
//                 <img alt="ventas" src={Ayuda} />
//                 Ayuda
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
