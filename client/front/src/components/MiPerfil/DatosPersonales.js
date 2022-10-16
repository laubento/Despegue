import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import '../MiPerfil/DatosPersonales.css'
import React from "react";
import { Link } from "react-router-dom";

export default function DatosPersonales(){

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    function login() {

    }

    return(
        <div className="MiPerfil-containerBox">
                    <div className="MiPerfil-DatosPersonalesContainer">
                        <div>
                            <div className="MiPerfil-ContainerTituloDatos"><h1>Datos Personales</h1></div>
                            <div className='MiPerfil-hr'>
                                <hr />
                            </div>
                            <Formik
                                initialValues={{
                                    name: "",
                                    lastName: '',
                                    email: "",
                                    birthDate: '',
                                    dni: '',
                                    celular: ''
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
                                    <div >
                                        <Form className="MiPerfil-formulario">

                                            <div className="MiPerfil-Container2Input">
                                                <div className="MiPerfil-ContainerInput">
                                                    <label htmlFor="name">Nombre</label>
                                                    <Field
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="abc@email.com"
                                                    />
                                                </div>
                                                <div className="MiPerfil-ContainerInput">
                                                    <label htmlFor="lastName">Apellido</label>
                                                    <Field
                                                        type="text"
                                                        id="lastName"
                                                        name="lastName"
                                                        placeholder="abc@email.com"
                                                    />
                                                </div>
                                            </div>
                                            <ErrorMessage
                                                name="name"
                                                component={() => <div className="error">{errors.name}</div>}
                                            />
                                            <ErrorMessage
                                                name="lastName"
                                                component={() => <div className="error">{errors.lastName}</div>}
                                            />
                        
                                            <div className="MiPerfil-Container2Input">
                                                <div className="MiPerfil-ContainerInput">
                                                    <label htmlFor="email">Email</label>
                                                    <Field
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        placeholder="abc@email.com"
                                                    />
                                                </div>
                                                <div className="MiPerfil-ContainerInput">
                                                    <label htmlFor="phone">Celular/Telefono</label>
                                                    <Field
                                                        type="text"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="abc@email.com"
                                                    />
                                                </div>
                                            </div>
                                            <ErrorMessage
                                                name="email"
                                                component={() => <div className="error">{errors.email}</div>}
                                            />
                                            <ErrorMessage
                                                name="phone"
                                                component={() => <div className="error">{errors.phone}</div>}
                                            />
                                            <div className="MiPerfil-Container2Input">
                                                <div className="MiPerfil-ContainerInput">
                                                    <label htmlFor="birthDate">Fecha Nacimiento</label>
                                                    <Field
                                                        type="text"
                                                        id="birthDate"
                                                        name="birthDate"
                                                        placeholder="DD/MM/YY"
                                                    />
                                                </div>
                                                <div className="MiPerfil-ContainerInput">
                                                    <label htmlFor="dni">DNI</label>
                                                    <Field
                                                        type="text"
                                                        id="dni"
                                                        name="dni"
                                                        placeholder="abc@email.com"
                                                    />
                                                </div>
                                            </div>
                                            <ErrorMessage
                                                name="dni"
                                                component={() => <div className="error">{errors.dni}</div>}
                                            />
                                            <ErrorMessage
                                                name="birthDate"
                                                component={() => <div className="error">{errors.birthDate}</div>}
                                            />

                                            <button type="submit">Iniciar Sesion</button>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
    )
}