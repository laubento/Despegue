import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import "../MiPerfil/DatosPersonales.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeUserInfo } from "../../Redux/Actions";
import { succesAlert } from "../../utils/alerts";

export default function DatosPersonales({ user, setUser }) {
  const [active, setActive] = useState(true);
  let today = new Date();
  let year = today.getFullYear();

  function changeValue(valores) {
    const updateUser = {
      ...user,
      firstName: valores.name ? valores.name : user.firstName,
      lastName: valores.lastName ? valores.lastName : user.lastName,
      email: valores.email ? valores.email : user.email,
      birthDate: valores.birthDate ? valores.birthDate : user.birthDate,
      dni: valores.dni ? valores.dni : user.dni,
      phone: valores.phone ? valores.phone : user.phone,
    };
    axios({
      method: "PUT",
      data: updateUser,
      url: "/update",
    })
      .then(() => {
        setUser(updateUser);
        window.localStorage.removeItem("user");
        window.localStorage.setItem("user", JSON.stringify(updateUser));
        succesAlert("datos guardados");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="MiPerfil-containerBox">
      <div className="MiPerfil-DatosPersonalesContainer">
        <div>
          <div className="MiPerfil-ContainerTituloDatos">
            <h1>Datos Personales</h1>
            <button onClick={() => setActive(false)} disabled={!active}>
              ✏️
            </button>
          </div>
          <div className="MiPerfil-hr">
            <hr />
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={{
              name: user ? user.firstName : "",
              lastName: user ? user.lastName : "",
              email: user ? user.email : "",
              birthDate: user ? user.birthDate : "",
              dni: user ? user.dni : "",
              phone: user ? user.phone : "",
            }}
            validate={(valores) => {
              let errores = {};

              // Validacion nombre
              if (valores.name.length === 1 || valores.name.length === 2) {
                errores.name = "Nombre demaciado corto";
              } else if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/.test(valores.name)) {
                errores.name = "Solo se permiten letras";
              } else if (valores.name.length > 15) {
                errores.name = "Demaciado caracteres";
              }

              // Validacion Apellido
              // Validacion logueo manual no tiene apellido

              if (valores.lastName) {
                if (
                  valores.lastName.length === 1 ||
                  valores.lastName.length === 2
                ) {
                  errores.lastName = "Apellido demaciado corto";
                } else if (
                  !/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/.test(valores.lastName)
                ) {
                  errores.lastName = "Solo se permiten letras";
                } else if (valores.lastName.length > 15) {
                  errores.lastName = "Demaciado caracteres";
                }
              } else {
                errores.lastName = "Por favor proporcione un apellido";
              }

              // Validaciones Telefono
              if (!/^[ 0-9]*$/.test(valores.phone)) {
                errores.phone = "Solo numeros";
              }
              if (valores.phone.length > 20) {
                errores.phone = "Demaciados caracteres";
              }

              // Validacion cumplenos
              if (!valores.birthDate) {
              } else if (
                !/^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/.test(
                  valores.birthDate
                )
              ) {
                errores.birthDate = "Ingresa una fecha valida (DD/MM/YYYY)";
              } else if (valores.birthDate.length < 10) {
                errores.birthDate = "Ingresa una fecha valida (DD/MM/YYYY)";
              } else {
                let comprobacion = "";
                for (let i = 6; i < valores.birthDate.length; i++) {
                  comprobacion += valores.birthDate[i];
                }
                if (comprobacion > year - 18) {
                  errores.birthDate = "Edad no valida";
                }
              }

              // // Validacion dni
              if (!/^[ 0-9]*$/.test(valores.dni)) {
                errores.dni = "Solo numeros";
              }
              if (valores.dni.length > 8) {
                errores.dni = "Demaciados caracteres";
              }

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              changeValue(valores);
              resetForm();
              setActive(true);
            }}
          >
            {({ errors }) => (
              <div>
                <Form className="MiPerfil-formulario">
                  <div className="MiPerfil-Container2Input">
                    <div className="MiPerfil-ContainerInput">
                      <label htmlFor="name">Nombre</label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder={user ? user.firstName : ""}
                        disabled={active}
                      />
                      <ErrorMessage
                        name="name"
                        component={() => (
                          <div className="error">{errors.name}</div>
                        )}
                      />
                    </div>
                    <div className="MiPerfil-ContainerInput">
                      <label htmlFor="lastName">Apellido</label>
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder={user ? user.lastName : ""}
                        disabled={active}
                      />
                      <ErrorMessage
                        name="lastName"
                        component={() => (
                          <div className="error">{errors.lastName}</div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="MiPerfil-Container2Input">
                    <div className="MiPerfil-ContainerInput">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        placeholder={user ? user.email : ""}
                        value={user.email}
                        disabled
                      />
                      <ErrorMessage
                        name="email"
                        component={() => (
                          <div className="error">{errors.email}</div>
                        )}
                      />
                    </div>
                    <div className="MiPerfil-ContainerInput">
                      <label htmlFor="phone">Celular/Telefono</label>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder={user ? user.phone : ""}
                        disabled={active}
                      />
                      <ErrorMessage
                        name="phone"
                        component={() => (
                          <div className="error">{errors.phone}</div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="MiPerfil-Container2Input">
                    <div className="MiPerfil-ContainerInput">
                      <label htmlFor="birthDate">Fecha Nacimiento</label>
                      <Field
                        type="text"
                        id="birthDate"
                        name="birthDate"
                        placeholder={user ? user.birthDate : ""}
                        disabled={active}
                      />
                      <ErrorMessage
                        name="birthDate"
                        component={() => (
                          <div className="error">{errors.birthDate}</div>
                        )}
                      />
                    </div>
                    <div className="MiPerfil-ContainerInput">
                      <label htmlFor="dni">DNI</label>
                      <Field
                        type="text"
                        id="dni"
                        name="dni"
                        placeholder={user ? user.dni : ""}
                        disabled={active}
                      />
                      <ErrorMessage
                        name="dni"
                        component={() => (
                          <div className="error">{errors.dni}</div>
                        )}
                      />
                    </div>
                  </div>
                  <button
                    type={"submit"}
                    className="btn btn-primary btn-sm MiPerfil-sub"
                    disabled={active}
                  >
                    Guardar
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
