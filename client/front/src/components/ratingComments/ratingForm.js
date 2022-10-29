import React from "react";
import {Formik} from "formik"
import "./ratingForm.css"

export default function RatingForm(){
    
    
    return(
        <div className="primaryDivFormRating">
            <Formik
            initialValues={{
                description:"",
                value:""
            }}
            onSubmit={(inputs, {resetForm}) => {
                console.log(inputs)
                resetForm()
            }}
            validate={(inputs) => {
                let errors = {}
                
                if(!inputs.description){
                    errors.description = "Porfavor danos un comentario acerca de nuestra pagina"
                }
                if(inputs.value < 0 || inputs.value > 5){
                    errors.value = "No se permiten valores inferiores a 0 ni mayores a 5"
                }

                return errors
            }}
            >
                {({values, handleSubmit, handleChange, handleBlur, touched, errors}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                        type="text"
                        id="comment"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        <h5>{touched.description && errors.description}</h5>
                    </div>
                    <div>
                        <input 
                        type="number" 
                        id="value"
                        name="value"
                        value={values.value}
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        />
                        <h5>{touched.value && errors.value}</h5>
                    </div>
                    <button type="submit">Submit Rating</button>
                </form>
                )}
            </Formik>
        </div>
    )
}