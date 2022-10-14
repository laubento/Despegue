import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Login = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const [regUser, setRegUser] = useState({ name: "", password: "", email: "" });
  const [logUser, setLogUser] = useState({ name: "", password: "", email: "" });

  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  const register = async () => {
    axios({
      method: "POST",
      data: regUser,
      withCredentials: true,
      url: "/register",
    }).then((res) => console.log(res));
  };

  const login = async () => {
    axios({
      method: "POST",
      data: logUser,
      withCredentials: true,
      url: "/login",
    }).then((res) => console.log(res));
  };
  const getUser = async () => {
    const res = await axios.get("/user");
    console.log(res);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setRegUser({
      ...regUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value,
    });
  };
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
            errores.password = "Please enter a password";
          }

          // Validacion correo
          if (!valores.email) {
            errores.email = "Please enter an email address";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "Mail can only contain letters, numbers, periods, hyphens and underscores";
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
                <label htmlFor="name">Password</label>
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
              <button type="submit">Enviar</button>
              {formularioEnviado && (
                <p className="exito">Formulario enviado con exito!</p>
              )}
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
