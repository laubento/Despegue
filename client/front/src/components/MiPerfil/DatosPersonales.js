import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import '../MiPerfil/DatosPersonales.css'
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { storeUserInfo } from "../../Redux/Actions";

export default function DatosPersonales(){
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    console.log(user)
    const [active, setActive] = useState(true);

    function changeValue(valores) {
        let obj = {
            firstName: valores.name ? valores.name : user.firstName ,
            lastName: valores.lastName  ? valores.lastName : user.lastname ,
            email: valores.email  ? valores.email : user.email,
            birthDate: valores.birthDate ?  valores.birthDate : user.birthDate,
            dni: valores.dni ? valores.dni: user.dni,
            phone: valores.phone ? valores.phone : user.phone, 
            id: user.id
        }
        axios({
            method: "PUT",
            data: obj,
            url: "/update",
        }).then((resObject) => {
            const obj = {
                name: resObject.data.name,
                photos: resObject.data.photo ? resObject.data.photo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
                firstName: resObject.data.firstName,
                lastname: resObject.data.lastname,
                email: resObject.data.email,
                id: resObject.data._id,
                dni: resObject.data.dni,
                phone: resObject.data.phone,
                birthDate: resObject.data.birthDate
              };
            dispatch(storeUserInfo(obj))
        });
        
    }

    return(
        <div className="MiPerfil-containerBox">
                    <div className="MiPerfil-DatosPersonalesContainer">
                        <div>
                            <div className="MiPerfil-ContainerTituloDatos">
                                <h1>Datos Personales</h1>
                                <button onClick={() => setActive(false)} disabled={!active}>✏️</button>
                            </div>
                            <div className='MiPerfil-hr'>
                                <hr />
                            </div>
                            <Formik
                                initialValues={{
                                    name: user ? user.firstName : '',
                                    lastName: user ? user.lastname : '',
                                    email: user ? user.email : '',
                                    birthDate: user ? user.birthDate : '',
                                    dni: user ? user.dni : '',
                                    phone: user ? user.phone : ''
                                }}
                                validate={(valores) => {
                                    let errores = {};

                                    // // Validacion nombre
                                    // if (!valores.password) {
                                    //     errores.password = "Por favor, introduzca una contraseña";
                                    // }

                                    // // Validacion correo
                                    // if (!valores.email) {
                                    //     errores.email = "Introduzca una dirección de correo electrónico";
                                    // } else if (
                                    //     !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                                    //         valores.email
                                    //     )
                                    // ) 

                                    return errores;
                                }}
                                onSubmit={(valores, { resetForm }) => {
                                    resetForm();
                                    setActive(true)
                                    alert('datos guardados')
                                    changeValue(valores);
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
                                                        placeholder={user ? user.firstName : ''}
                                                        disabled={active}
                                                        
                                                    />
                                                </div>
                                                <div className="MiPerfil-ContainerInput">
                                                    <label htmlFor="lastName">Apellido</label>
                                                    <Field
                                                        type="text"
                                                        id="lastName"
                                                        name="lastName"
                                                        placeholder={user ? user.lastname : ''}
                                                        disabled={active}
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
                                                        placeholder={user ? user.email : ''}
                                                        disabled={active}
                                                    />
                                                </div>
                                                <div className="MiPerfil-ContainerInput">
                                                    <label htmlFor="phone">Celular/Telefono</label>
                                                    <Field
                                                        type="text"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder={user ? user.phone : ''}
                                                        disabled={active}
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
                                                        placeholder={user ? user.birthDate : ''}
                                                        disabled={active}
                                                    />
                                                </div>
                                                <div className="MiPerfil-ContainerInput">
                                                    <label htmlFor="dni">DNI</label>
                                                    <Field
                                                        type="text"
                                                        id="dni"
                                                        name="dni"
                                                        placeholder={user ? user.dni : ''}
                                                        disabled={active}
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
                                            <button type={"submit"} className="btn btn-primary btn-sm" disabled={active}>Guardar</button>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
    )
}