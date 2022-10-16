import React, { useState } from "react";
import axios from "axios";
import "../styles/Login-Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import Portada from "../../Images/PortadaFormulario.png";
import Google from "../../Images/google.png";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ user }) => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [logUser, setLogUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  useEffect(() => {
    console.log("entre");
    if (user) {
      console.log("a");
      history.push("/");
    }
  }, [user]);

  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:3001/auth/facebook", "_self");
  };

  // const register = async () => {
  //   axios({
  //     method: "POST",
  //     data: regUser,
  //     withCredentials: true,
  //     url: "/register",
  //   }).then((res) => console.log(res));
  // };

  const loginFetch = async () => {
    axios({
      method: "POST",
      data: logUser,
      withCredentials: true,
      url: "/login",
    }).then((res) => {
      console.log(res);
      history.push("/");
    });
  };
  // const getUser = async () => {
  //   const res = await axios.get("/user");
  //   console.log(res);
  // };
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setRegUser({
  //     ...regUser,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleLogin = (e) => {
    e.preventDefault();
    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value,
    });
  };

  function login(valores) {}

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
          console.log("Form submitted");
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
                  value={logUser.email}
                  onChange={handleLogin}
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
                  value={logUser.password}
                  onChange={handleLogin}
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                />
              </div>

              <button onClick={loginFetch} type="submit">
                Iniciar Sesion
              </button>
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
