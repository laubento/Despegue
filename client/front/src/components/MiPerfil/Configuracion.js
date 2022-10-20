import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import '../MiPerfil/Configuracion.css'
import React from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { storeUserInfo } from "../../Redux/Actions";

export default function Configuracion(){
    const user = useSelector(state => state.user)
    const [active, setActive] = useState(true);

    function changeValue(valores) {
        let obj = {
            email: valores.email  ? valores.email : user.email,
            password: valores.password ? valores.password : null
        }
        axios({
            method: "PUT",
            data: obj,
            url: "/update/changePassword",
        }).then(() => {
            alert('Contasena Cambiada')
        }).catch((e) => console.log(e))
    }

    return(
        <div className="Configuracion-containerBox">
                    <div className="Configuracion-DatosPersonalesContainer">
                        <div>
                            <div className="Configuracion-ContainerTituloDatos">
                                <h1>Configuracion de cuenta</h1>
                                <button onClick={() => setActive(false)} disabled={!active}>✏️</button>
                            </div>
                            <div className='Configuracion-hr'>
                                <hr />
                            </div>
                            <Formik
                                initialValues={{
                                    email: user ? user.email : '',
                                    password: ''
                                }}
                                validate={(valores) => {
                                    let errores = {};

                                    if (!valores.password) {
                                        errores.password = "Por favor, introduzca una contraseña";
                                    }
                                    else if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valores.password)){
                                        errores.password = `Minimo 8 caracteres, Maximo 16 caracteres`
                                        errores.passwordd = 'Al menos un digito, al menos una minuscula y una mayuscula'
                                        errores.passworddd = 'Sin espacios'
                                    }

                                    return errores;
                                }}
                                onSubmit={(valores, { resetForm }) => {
                                    resetForm();
                                    setActive(true)
                                    changeValue(valores);
                                }}
                            >
                                {({ errors }) => (
                                    <div >
                                        <Form className="Configuracion-formulario">
                                            <div className="Configuracion-ContainerInput">
                                                <label htmlFor="email">Email</label>
                                                <Field
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder={user ? user.email : ''}
                                                    disabled
                                                />
                                                <ErrorMessage
                                                    name="email"
                                                    component={() => <div className="error">{errors.email}</div>}
                                                />
                                            </div>
                                            <div className="Configuracion-ContainerInput">
                                                <label htmlFor="password">Contraseña</label>
                                                <Field
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder={user ? user.password : ''}
                                                    disabled={active}
                                                />
                                                <ErrorMessage
                                                    name="password"
                                                    component={() => <div className="error">{errors.password}</div>}
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
                                            <div className='Configuracion-BotonCancelar'>
                                                <button type={"submit"} className="btn btn-primary btn-sm Configuracion-sub" disabled={active}>Guardar</button>
                                                <button onClick={(e) => {setActive(true); window.location.reload()}} type={"reset"} className="btn btn-danger btn-sm Configuracion-sub" disabled={active}>Cancelar</button>
                                            </div>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
    )
}