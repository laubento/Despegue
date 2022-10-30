import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import "../MiPerfil/Configuracion.css";
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { storeUserInfo } from "../../Redux/Actions";
import { succesAlert } from "../../utils/alerts";

export default function Configuracion() {

  let user = useSelector((state) => state.user);
  const user2 = JSON.parse(window.localStorage.getItem("user"));

  if (!user && user2) user = user2;

  const [active, setActive] = useState(true);
  const [save, setSave] = useState(true);

  function changeValue(valores) {
    console.log('enre')
    let obj = {
      id: user.id,
      email: valores.email ? valores.email : user.email,
      password: valores.password ? valores.password : null,
      newPassword: valores.newPassword ? valores.newPassword : null,
    };
    axios({
      method: "PUT",
      data: obj,
      url: "/update/changePassword",
    })
      .then(() => {
        succesAlert("Contasena Cambiada");
      })
      .catch((e) => console.log(e));
  }


  return (
    <div className="Configuracion-containerBox">
      <div className="Configuracion-DatosPersonalesContainer">
        <div>
          <div className="Configuracion-ContainerTituloDatos">
            <h1>Configuracion de cuenta</h1>
            <button onClick={() => setActive(false)} disabled={!active}>
              ✏️
            </button>
          </div>
          <div className="Configuracion-hr">
            <hr />
          </div>
          <Formik
            initialValues={{
              email: user ? user.email : "",
              password: "",
              newPassword: "",
              repeatPassword: "",
            }}
            validate={(valores) => {

              let errores = {};
              setSave(true)
              if (!valores.email) errores.email = "Por favor, introduzca un email"
              else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(valores.email)) errores.email = 'Email inválido'
              if (!valores.password) {
                errores.password = "Por favor, introduzca una contraseña";
              }
              if (!valores.repeatPassword) {
                errores.repeatPassword = "Por favor, introduzca una contraseña";
              }
              if (!valores.newPassword) {
                errores.newPassword = "Por favor, introduzca una contraseña";
              } else if (
                !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(
                  valores.newPassword
                )
              ) {
                errores.newPassword = `Minimo 8 caracteres, Maximo 16 caracteres`;
                errores.newPasswordd =
                  "Al menos un digito, al menos una minuscula y una mayuscula";
                errores.newPassworddd = "Sin espacios";
              } else if (valores.newPassword !== valores.repeatPassword) {
                errores.repeatPassword = "Tiene que ser la misma contraseña que arriba";
              }
              if (Object.values(errores).length === 0) {
                setSave(false)
              }
              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
              setActive(true);
              changeValue(valores);
            }}
          >
            {({ errors }) => (
              <div>
                <Form className="Configuracion-formulario">
                  <div className="Configuracion-ContainerInput">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      value={user.email ? user.email : null }
                      disabled={user.email || active }
                    />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <div className="error">{errors.email}</div>
                      )}
                    />
                  </div>
                  <div className="Configuracion-ContainerInput">
                    <label htmlFor="password">Contraseña</label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder={'*****'}
                      disabled={active}
                    />
                    <ErrorMessage
                      name="password"
                      component={() => (
                        <div className="error">{errors.password}</div>
                      )}
                    />
                    {/* <ErrorMessage
                      name="password"
                      component={() => (
                        <div className="error">{errors.passwordd}</div>
                      )}
                    />
                    <ErrorMessage
                      name="password"
                      component={() => (
                        <div className="error">{errors.passworddd}</div>
                      )}
                    /> */}
                    {!active ?
                      <div className="Configuracion-ContainerInput">
                        <label htmlFor="newPassword">Ingresá tu nueva contraseña</label>
                        <Field
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          placeholder={'*****'}
                          disabled={active}
                        />
                        <ErrorMessage
                          name="newPassword"
                          component={() => (
                            <div className="error">{errors.newPassword}</div>
                          )}
                        />
                        <ErrorMessage
                          name="newPassword"
                          component={() => (
                            <div className="error">{errors.newPasswordd}</div>
                          )}
                        />
                        <ErrorMessage
                          name="newPassword"
                          component={() => (
                            <div className="error">{errors.newPassworddd}</div>
                          )}
                        />
                        <label htmlFor="repeatPassword">Repetí tu nueva contraseña</label>
                        <Field
                          type="password"
                          id="repeatPassword"
                          name="repeatPassword"
                          placeholder={'*****'}
                          disabled={active}
                        />
                        <ErrorMessage
                          name="repeatPassword"
                          component={() => (
                            <div className="error">{errors.repeatPassword}</div>
                          )}
                        />
                        <ErrorMessage
                          name="repeatPassword"
                          component={() => (
                            <div className="error">{errors.repeatPasswordd}</div>
                          )}
                        />
                      </div> : null
                    }
                  </div>
                  <div className="Configuracion-BotonCancelar">
                    <button
                      type={"submit"}
                      className="btn btn-primary btn-sm Configuracion-sub"
                      disabled={save}
                      // onClick={() => handleSubmit()}
                    >
                      Guardar
                    </button>
                    <button
                      onClick={(e) => {
                        setActive(true);
                        window.location.reload();
                      }}
                      type={"reset"}
                      className="btn btn-danger btn-sm Configuracion-sub"
                      disabled={active}
                    >
                      Cancelar
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
