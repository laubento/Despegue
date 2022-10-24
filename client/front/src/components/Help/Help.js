import '../Help/Help.css'
import Portada from '../../Images/AyudaPortada.png'
import CambioReserva from '../../Images/Ayuda/CambioReserva.png'
import CambioVuelo from '../../Images/Ayuda/CambioVuelo.png'
import Cancelaciones from '../../Images/Ayuda/Cancelaciones.png'
import Coronavirus from '../../Images/Ayuda/Coronavirus.png'
import EstadoReserva from '../../Images/Ayuda/EstadoReserva.png'
import Facturacion from '../../Images/Ayuda/Facturacion.png'
import Opiniones from '../../Images/Ayuda/Opiniones.png'
import PreguntasFrecuentes from '../../Images/Ayuda/PreguntasFrecuentes.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { succesAlert } from "../../utils/alerts";

export default function Help() {
    const user = JSON.parse(window.localStorage.getItem("user"));

    function suscribirme(){
        axios({
            method: "PUT",
            data: user,
            url: "/users/membership",
          }).then((e) => {
            succesAlert("Usuario suscripto");
          })
    }
    function desSuscribirme(){
        axios({
            method: "PUT",
            data: user,
            url: "/users/membershipDisable",
          }).then((e) => {
            succesAlert("Usuario desuscripto");
          })
    }

    return (
        <div>
            <div className="Help-ContainerPortada">
                <img src={Portada} alt="Portada" />
            </div>
            <div className='container mt-4 pb-3'>
                <div className='row mb-4'>
                    <div className='col-6 Help-ContainerBox d-flex justify-content-center'>
                        <div className='HelpBox shadow rounded'>
                            <div className='row'>
                                <div className='d-flex justify-content-center'>
                                    <h3>Cambios en tu vuelo</h3>
                                </div>
                                <div className='col-2 p-0'>
                                    <div className='Help-ContainerImg'>
                                        <img src={CambioVuelo} alt='Cambio Reserva' />
                                    </div>
                                </div>
                                <div className='col-10 '>
                                    <p className='m-0'>Los cambios que le surgan a tu vuelo seran notificados vial mail, pedimos que se este pediente ante cualquier modificacion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 Help-ContainerBox d-flex justify-content-center'>
                        <div className='HelpBox shadow rounded'>
                            <div className='row'>
                                <div className='d-flex justify-content-center'>
                                    <h3>Informacion sobre Covid</h3>
                                </div>
                                <div className='col-2 p-0'>
                                    <div className='Help-ContainerImg'>
                                        <img src={Coronavirus} alt='Cambio Reserva' />
                                    </div>
                                </div>
                                <div className='col-10'>
                                    <p className='m-0'>Te invitamos a que revises las politicas contra Covid-19 de cada pais <a target={'_blank'} href='https://www.kayak.es/restricciones-de-viaje?' className='Help-Aqui'>Aquí</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mb-4'>
                    <div className='col-6 Help-ContainerBox d-flex justify-content-center'>
                        <div className='HelpBox shadow rounded'>
                            <div className='row'>
                                <div className='d-flex justify-content-center'>
                                    <h3>Estado de reserva</h3>
                                </div>
                                <div className='col-2 p-0'>
                                    <div className='Help-ContainerImg'>
                                        <img src={EstadoReserva} alt='Cambio Reserva' />
                                    </div>
                                </div>
                                <div className='col-10'>
                                    <p className='m-0'>Las reservas siempre van estar estado correcto, cualquier modificacion se notifica via mail. Para ver tus reserva/viajes presiona <Link to={'/user/travels'} className='Help-Aqui'>Aquí</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 Help-ContainerBox d-flex justify-content-center'>
                        <div className='HelpBox shadow rounded'>
                            <div className='row'>
                                <div className='d-flex justify-content-center'>
                                    <h3>Cancelaciones</h3>
                                </div>
                                <div className='col-2 p-0'>
                                    <div className='Help-ContainerImg'>
                                        <img src={Cancelaciones} alt='Cambio Reserva' />
                                    </div>
                                </div>
                                <div className='col-10'>
                                    <p className='m-0'>Las cancelaciones se realizan via telefonica: <b>0810 810 9992</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mb-4'>
                    <div className='col-6 Help-ContainerBox d-flex justify-content-center'>
                        <div className='HelpBox shadow rounded'>
                            <div className='row'>
                                <div className='d-flex justify-content-center'>
                                    <h3>Cambio de reserva</h3>
                                </div>
                                <div className='col-2 p-0'>
                                    <div className='Help-ContainerImg'>
                                        <img src={CambioReserva} alt='Cambio Reserva' />
                                    </div>
                                </div>
                                <div className='col-10'>
                                    <p className='m-0'>Una vez comprado el viaje estos no pueden ser cambiado ni modificados por el usuario.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 Help-ContainerBox d-flex justify-content-center'>
                        <div className='HelpBox shadow rounded'>
                            <div className='row'>
                                <div className='d-flex justify-content-center'>
                                    <h3>Facturacion</h3>
                                </div>
                                <div className='col-2 p-0'>
                                    <div className='Help-ContainerImg'>
                                        <img src={Facturacion} alt='Cambio Reserva' />
                                    </div>
                                </div>
                                <div className='col-10'>
                                    <p className='m-0'>Una vez comprado el viaje la factura se enviara por mail. En caso de volver a necesitarla llame al: <b>0810 810 9992</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mb-4 pb-4'>
                    <div className='col-6 Help-ContainerBox d-flex justify-content-center'>
                        <div className='HelpBox shadow rounded'>
                            <div className='row'>
                                <div className='d-flex justify-content-center'>
                                    <h3>Reseñas y opiniones</h3>
                                </div>
                                <div className='col-2 p-0'>
                                    <div className='Help-ContainerImg'>
                                        <img src={Opiniones} alt='Cambio Reserva' />
                                    </div>
                                </div>
                                <div className='col-10'>
                                    <p className='m-0'>En caso de ver o querer dejar opiniones de la pagina, tocar <a className='Help-Aqui'>Aquí</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 Help-ContainerBox d-flex justify-content-center'>
                        <div className='HelpBox shadow rounded'>
                            <div className='row'>
                                <div className='d-flex justify-content-center'>
                                    <h3>Preguntas Frecuentes</h3>
                                </div>
                                <div className='col-2 p-0'>
                                    <div className='Help-ContainerImg'>
                                        <img src={PreguntasFrecuentes} alt='Cambio Reserva' />
                                    </div>
                                </div>
                                <div className='col-10'>
                                    <p className='m-0'>Visita nuestras preguntas frecuentes tocando <a className='Help-Aqui'>Aquí</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                    <div className='d-flex justify-content-center'>
                        <h4>¿Todavía no encontraste lo que estás buscando?</h4>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='Help-Contacto'>
                            <h6>Atencion al cliente: <b>0810 810 9992</b></h6>
                            <h6>Lunes a viernes de <b>10 a 19hs</b>.</h6>
                            <h6>Sábados de <b>10 a 16hs</b>.</h6>
                        </div>
                    </div>
                <hr />
                <div className="MiPerfil-Ofertas Help-Suscrib">
                    <h2>Desea que se le notifique por gmail las ofertas?</h2>
                    <button onClick={suscribirme} className="MiPerfil-Sub">SUSCRIBIRME</button>
                    <button onClick={desSuscribirme} className="MiPerfil-DesSub">DESUSCRIBIRME</button>
                </div>

            </div>
        </div>
    )
}