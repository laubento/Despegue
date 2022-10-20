import React, { useState } from "react";
import axios from "axios";
import "../styles/Login-Register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import Portada from "../../Images/PortadaFormulario.png";
import Google from "../../Images/google.png";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Register = ({ user }) => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  const register = (valores) => {
    axios({
      method: "POST",
      data: valores,
      withCredentials: true,
      url: "/register",
    })
      .then((res) => {
        alert(res.data);
        history.push("/login");
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(err);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordRepet: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.name) {
            errores.name = "Por favor, introduzca un nombre";
          }

          // Validacion password
          if (!valores.password) {
            errores.password = "Por favor, introduzca una contraseña";
          }
          else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.password)){
            errores.password = `Minimo 8 caracteres, Maximo 16 caracteres`
            errores.passwordd = 'Al menos un digito, al menos una minuscula y una mayuscula'
            errores.passworddd = 'Sin espacios'
        }

          if (!valores.passwordRepet) {
            errores.passwordRepet = "Por favor, introduzca una contraseña";
          } else if (valores.password !== valores.passwordRepet) {
            errores.passwordRepet = "Las contraseñas son distintas";
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
          register(valores);
        }}
      >
        {({ errors }) => (
          <div className="Login-containerPrincipal">
            <Form className="Login-formulario">
              <div className="Login-PortadaContainer">
                <img className="Login-Portada" src={Portada} alt="Portada" />
              </div>
              <div>
                <label htmlFor="name">Nombre</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Veronica"
                />
                <ErrorMessage
                  name="name"
                  component={() => <div className="error">{errors.name}</div>}
                />
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
                <ErrorMessage
                  name="password"
                  component={() => <div className="error">{errors.passwordd}</div>}
                />
                <ErrorMessage
                  name="password"
                  component={() => <div className="error">{errors.passworddd}</div>}
                />
              </div>
              <div>
                <label htmlFor="name">Repetir contraseña</label>
                <Field
                  type="password"
                  id="passwordRepet"
                  name="passwordRepet"
                  placeholder="********"
                />
                <ErrorMessage
                  name="passwordRepet"
                  component={() => (
                    <div className="error">{errors.passwordRepet}</div>
                  )}
                />
              </div>
              <button type="submit">Registrar</button>
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
                <h6>Ya tienes eres usuario?</h6>
                <div className="Login-BotonRegister">
                  <Link className="Login-Link" to={"/login"}>
                    Iniciar Sesion
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

export default Register;
