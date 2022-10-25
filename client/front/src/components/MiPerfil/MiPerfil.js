import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import "../MiPerfil/MiPerfil.css";
import DatosPersonales from "./DatosPersonales";
import Configuracion from "./Configuracion";
import { useSelector } from "react-redux";
import UserHistory from "./userHistory";
import axios from "axios";
import { succesAlert } from "../../utils/alerts";

export default function MiPerfil() {
  const localUser = JSON.parse(window.localStorage.getItem("user"));
  const [user, setUser] = useState(localUser);

  let url = window.location.pathname;
  console.log(user);
  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  function suscribirme() {
    axios({
      method: "PUT",
      data: user,
      url: "/users/membership",
    }).then((e) => {
      succesAlert("Usuario suscripto");
      setUser({
        ...user,
        membership: true,
      });
      window.localStorage.removeItem("user");
    });
  }
  function desSuscribirme() {
    axios({
      method: "PUT",
      data: user,
      url: "/users/membershipDisable",
    }).then((e) => {
      succesAlert("Usuario desuscripto");
      setUser({ ...user, membership: false });
      window.localStorage.removeItem("user");
      //   window.localStorage.setItem("user", JSON.stringify(user));
    });
  }

  return (
    <div>
      <div className="MiPerfil-containerTituloPrincipal">
        <h1>Mi perfil</h1>
      </div>
      <div className="MiPerfil-containerInfoPrincipal">
        <div className="MiPerfil-ContainerDatos">
          <div className="MiPerfil-containerFoto">
            <img src={user ? user.photo : undefined} alt="perfil" />
            <div>
              <h4>Hola,</h4>
              <h3>{user ? user.firstName.toUpperCase() : undefined}</h3>
              {user ? (
                <h3>
                  {user.lastName ? user.lastName.toUpperCase() : undefined}
                </h3>
              ) : undefined}
            </div>
          </div>
          <div className="MiPerfil-containerChangeBox">
            <Link
              to={"/user"}
              className={
                url === "/user"
                  ? "MiPerfil-ChangeBox MiPerfil-ChangeBoxActive"
                  : "MiPerfil-ChangeBox"
              }
            >
              <h5>Datos Personales</h5>
            </Link>
            <hr />
            <Link
              to={"/user/travels"}
              className={
                url === "/user/travels"
                  ? "MiPerfil-ChangeBox MiPerfil-ChangeBoxActive"
                  : "MiPerfil-ChangeBox"
              }
            >
              <h5>Registro de viajes</h5>
            </Link>
            <hr />
            <Link
              to={"/user/config"}
              className={
                url === "/user/config"
                  ? "MiPerfil-ChangeBox MiPerfil-ChangeBoxActive"
                  : "MiPerfil-ChangeBox"
              }
            >
              <h5>Configuracion de cuenta</h5>
            </Link>
          </div>
        </div>
        <div>
          <Route
            exact
            path="/user"
            render={() => <DatosPersonales user={user} setUser={setUser} />}
          />
          <Route exact path={"/user/config"} render={() => <Configuracion />} />
          <Route exact path={"/user/travels"} render={() => <UserHistory />} />
        </div>
      </div>
      <div className="MiPerfil-Ofertas">
        <h2>Desea que se le notifique por gmail las ofertas?</h2>
        {user.membership ? (
          <button onClick={desSuscribirme} className="MiPerfil-DesSub">
            DESUSCRIBIRME
          </button>
        ) : (
          <button onClick={suscribirme} className="MiPerfil-Sub">
            SUSCRIBIRME
          </button>
        )}
      </div>
    </div>
  );
}
