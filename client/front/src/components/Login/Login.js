import React, { useState } from "react";
import axios from "axios";
import "../styles/Login-Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import Portada from "../../Images/PortadaFormulario.png";
import Google from "../../Images/google.png";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const history = useHistory()
  const user = useSelector(state => state.user)
  const setLog = localStorage.getItem('sinLog')
  const payment = useSelector(state => state.getPayment)
  useEffect(() => {
    if(setLog !== 'true'){
    if(user){
      history.push('/');
    }}
  }, [user])


  const google = () => {
    if(setLog === 'true'){
      let display = true;
      localStorage.setItem('display', display)
      return window.open("http://localhost:3001/auth/google", "_self",'',);
    }
    window.open("http://localhost:3001/auth/google", "_self",'',);
  };
  console.log(setLog)

  function login(valores){
    if(setLog === 'true'){
      axios({
        method: "POST",
        data: valores,
        withCredentials: true,
        url: "/login",
      })
      .then(() =>history.push('/purchase') )
    }
    axios({
      method: "POST",
      data: valores,
      withCredentials: true,
      url: "/login",
    }).then((res) => {
      window.location.reload();
    });
  }

  return (
    <>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion nombre
          if (!valores.password) {
            errores.password = "Por favor, introduzca una contraseña";
          }

          // Validacion correo
          if (!valores.email) {
            errores.email = "Introduzca una dirección de correo electrónico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El correo sólo puede contener letras, números, puntos, guiones y guiones bajos";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
          login(valores);
        }}
      >
        {({ errors }) => (
          <div className="Login-containerPrincipal">
            <Form className="Login-formulario">
              <div className="Login-PortadaContainer">
                <img className="Login-Portada" src={Portada} alt="Portada" />
              </div>
              <div>
                <label htmlFor="email">Correo</label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="abc@email.com"
                />
                <ErrorMessage
                  name="email"
                  component={() => <div className="error">{errors.email}</div>}
                />
              </div>
              <div>
                <label htmlFor="name">Contraseña</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                />
              </div>

              <button type="submit">Iniciar Sesion</button>
              <button
                onClick={google}
                type="button"
                className="Login-ButtonGoogle"
              >
                <img src={Google} alt="google" />
                Iniciar Sesion con google
              </button>

              {formularioEnviado && (
                <p className="exito">Formulario enviado con exito!</p>
              )}
              <div className="Login-containerRegister">
                <h6>No tenes cuenta?</h6>
                <div className="Login-BotonRegister">
                  <Link className="Login-Link" to={"/register"}>
                    Registrarse
                  </Link>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
