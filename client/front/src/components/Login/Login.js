import React, { useState } from "react";
import axios from "axios";
import '../styles/Login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  const Login = (valores) => {
    console.log(valores)
  }

  return (
<>
			<Formik
				initialValues={{
					password: '',
					email: ''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.password){
						errores.password = 'Please enter a password'
					} 

					// Validacion correo
					if(!valores.email){
						errores.email = 'Please enter an email address'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
						errores.email = 'Mail can only contain letters, numbers, periods, hyphens and underscores'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Form submitted');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
          Login(valores)
				}}
			>
				{( {errors} ) => (
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
                <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />
              </div>
              <div>
                <label htmlFor="name">Password</label>
                <Field
                  type="text" 
                  id="password" 
                  name="password" 
                  placeholder="********"
                />
                <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} />
              </div>
              <button type="submit">Enviar</button>
              {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
            </Form>
          </div>
				)}
			</Formik>
		</>
  );
};

export default Login;
