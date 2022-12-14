import React, { useEffect, useState } from "react";
import { Formik } from "formik"
import "./ratingForm.css"
import { FaStar } from "react-icons/fa"
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';



export default function RatingForm() {
    const stars = Array(5).fill(0)
    const [currentValue, setCurrentValue] = useState(5)
    const [hoverValue, setHoverValue] = useState(undefined)
    const [comprobationState, setComprobationState] = useState(false)
    const history = useHistory();
    const { loginWithRedirect, logout } = useAuth0();


    const user = JSON.parse(window.localStorage.getItem("user"));



    const postInfo = (description) => {
        let obj = {
            user: user,
            description: description,
            value: currentValue
        }
        axios({
            method: "POST",
            data: obj,
            url: "/rating/newRating",
        })
        window.location.reload()
    }

    let handleClick = (value) => {
        setCurrentValue(value)
    }

    let handleMouseOver = (value) => {
        setHoverValue(value)
    }

    let handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
    }


    useEffect(() => {
        if (user) {
            axios({
                method: "POST",
                data: user,
                url: "/rating/ratingComprobation",
            }).then((data) => {
                setComprobationState(data.data)
            }).catch((err) => {
                console.log(err)
            })
            console.log("entre")
        }
    }, [])


    return (
        <div className="primaryDivFormRating">
            <Formik
                initialValues={{
                    description: "",
                }}
                onSubmit={(inputs, { resetForm }) => {
                    if (!user) {
                        loginWithRedirect({ redirectUri: "http://localhost:3000/callback" })
                    }
                    resetForm()
                    postInfo(inputs.description)
                }}
                validate={(inputs) => {
                    let errors = {}

                    if (!inputs.description) {
                        errors.description = "Por favor danos un comentario acerca de nuestra pagina"
                    }
                    return errors
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur, touched, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <div class="card cardDiv1">
                                <h4>Dejanos un comentario acerca de nuestra pagina!</h4>
                                <div class="card-body">
                                    <input
                                        class="form-control" rows="2"
                                        type="text"
                                        id="comment"
                                        name="description"
                                        value={values.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={comprobationState}
                                    />
                                </div>
                            </div>
                            <h5>{touched.description && errors.description}</h5>
                            <div className="Rating-ContainerEstrellas">
                                {comprobationState ? <h6>????Gracias por valorarnos</h6> :
                                    <div>
                                        <h4>Rating</h4>
                                        <div>
                                            {stars.map((element, index) => {
                                                return (
                                                    <FaStar
                                                        key={index}
                                                        size={22}
                                                        style={{
                                                            marginRight: 4,
                                                            cursor: "pointer"
                                                        }}
                                                        color={(currentValue || hoverValue) > index ? colors.orange : colors.grey}
                                                        onClick={() => handleClick(index + 1)}
                                                        onMouseOver={() => handleMouseOver(index + 1)}
                                                        onMouseLeave={handleMouseLeave}
                                                        value={values.value}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>}

                                <h5>{errors.value}</h5>
                            </div>
                            <div className="Rating-Boton">
                                <button className={comprobationState ? 'Rating-BotonDisabled' : 'Rating-BotonActive'} type="submit" disabled={comprobationState}>Enviar</button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}