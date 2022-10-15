import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
// se usa info de momento

export default function Footer() {
    return (
        <div className='Footer-containerPrincipal'>
            <footer className='bg-dark text-white'>
                <div className='container'>
                    <nav className='row p-5'>
                        <div className='col-xs-12 col-md-6 col-lg-3'>
                            <p className='h3'>Codigo AV</p>
                            <p className='text-secondary'>Buenos Aires, Bs. As.</p>
                        </div>
                        <div className='col-xs-12 col-md-6 col-lg-3'>
                            <p className='h5 mb-3'>Redes Sociales</p>
                            <div className='mb-3'>
                                <a href='#' className='text-secondary text-decoration-none'>Instagram</a>
                            </div>
                            <div className='mb-3'>
                                <a href='#' className='text-secondary text-decoration-none'>Facebook</a>
                            </div>
                            <div className='mb-3'>
                                <a href='#' className='text-secondary text-decoration-none'>Twiter</a>
                            </div>

                        </div>
                        <div className='col-xs-12 col-md-6 col-lg-3'>
                            <p className='h5 mb-3'>Contacto</p>
                            <p className='mb-3 text-secondary'>Phone: +54 341 240 8856</p>
                            <p className='mb-3 text-secondary'>Gmail: despegue@gmail.com</p>
                        </div>
                        <div className='col-xs-12 col-md-6 col-lg-3'>
                            <p className='h5 mb-3'>Links</p>
                            <div className='mb-3'>
                                <a href='#' className='text-secondary text-decoration-none'>Terms & coditions</a>
                            </div>
                            <div className='mb-3'>
                                <a href='#' className='text-secondary text-decoration-none'>Privacy Policy</a>
                            </div>

                        </div>

                    </nav>
                </div>
            </footer>

        </div>
    )
}