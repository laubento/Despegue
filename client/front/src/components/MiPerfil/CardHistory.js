import React from "react";
import '../MiPerfil/CardHistory.css'
import Logo from "../../Images/Logo.png"

export default function CardHistory({ paquete }) {
    console.log(paquete)
    return (
        <div>
            <div className="dropdown CardHistory-vuelo">
                <button className="btn btn-secondary CardHistory-vueloBoton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div>{paquete[0].destination.toUpperCase()}</div>
                    {paquete.length === 1 ? <div>{paquete[0].exit.toUpperCase()}</div> : null}
                    {paquete.length > 1 ? <div>{paquete[0].exit.toUpperCase()}</div> : null}
                    {paquete.length > 1 ? <div>{paquete[0].destination.toUpperCase()}</div> : null}
                </button>


                <div className="dropdown-menu CardHistory-Info">
                    <div className="CardHistory-ContainerLogo"><img className="CardHistory-Logo" src={Logo} />DETALLES DE TU VUELO</div>
                    <div className="CardHistory-ContainerInfoEspe">
                        <div className="CardHistory-PrecioYLugar">
                            <div>
                                <h5>{`${paquete[0].destination} - ${paquete[0].exit}`}</h5>
                                <h6>{paquete.length > 1 ? 'Ida y vuelta' : 'Ida'}</h6>
                            </div>
                            <div className="CardHistory-Precio">
                                <h6>TOTAL</h6>
                                <h6>{paquete.length > 1 ? `$${Number(paquete[0].price) + Number(paquete[1].price)}`: `$${paquete[0].price}`}</h6>
                            </div>
                        </div>
                        <hr />
                        <div className="CarHistory-InfoTotalVuelo">
                            <div className="CardHistory-ContainerPrincipalIda">
                                <div className="CardHistory-ContainerIdaTitulo">
                                    <h3 className="CardHistory-IdaTitulo">➜Ida</h3>
                                    <h3>{`${paquete[0].destination} - ${paquete[0].exit}`}</h3>
                                </div>
                                <div className="CardHistory-Ida">
                                    <h3><b>Detalles del vuelo</b></h3>
                                    <h4>📍<b>Origen:</b>{` ${paquete[0].destination}`}</h4>
                                    <h4><b>{`Sale: ${paquete[0].scales[0].departureTime} - ${paquete[0].scales[0].departure}`}</b></h4>
                                    <h4>📍<b>Destino:</b>{` ${paquete[0].exit}`}</h4>
                                    <h4><b>{`Llega: ${paquete[0].scales[paquete[0].scales.length - 1].arrivalTime} - ${paquete[0].scales[paquete[0].scales.length - 1].arrival}`}</b></h4>
                                </div>
                                {paquete[0].scales.length ? 
                                <div className="CardHistory-IdaScales">
                                    <h5>Escalas</h5>
                                    <ul>
                                        {paquete[0].scales.map((e, i) => {
                                            return(
                                                <li key={i}>{`📍${e.departureAirport} - ${e.arrivalAirport} || ${e.departureTime} - ${e.arrivalTime
                                                } || ${e.departure}`}</li>
                                            )
                                        })}
                                    </ul>
                                </div> : null}
                                <div className="CardHistory-IdaExtra">
                                    <h6><b>Tipo:</b> {` ${paquete[0].type}`}</h6>
                                    <h6><b>Pagado:</b>{` $${paquete[0].price}`}</h6>
                                </div>
                            </div>

                            {paquete.length > 1 ? <div className="CardHistory-ContainerPrincipalVuelta">
                                <div className="CardHistory-ContainerIdaTitulo">
                                    <h3 className="CardHistory-IdaTitulo CardHistory-IdaVuelta">➜Vuelta</h3>
                                    <h3>{`${paquete[1].destination} - ${paquete[1].exit}`}</h3>
                                </div>
                                <div className="CardHistory-Ida">
                                    <h3><b>Detalles del vuelo</b></h3>
                                    <h4>📍<b>Origen:</b>{` ${paquete[1].destination}`}</h4>
                                    <h4><b>{`Sale: ${paquete[1].scales[0].departureTime} - ${paquete[1].scales[0].departure}`}</b></h4>
                                    <h4>📍<b>Destino:</b>{` ${paquete[1].exit}`}</h4>
                                    <h4><b>{`Llega: ${paquete[1].scales[paquete[1].scales.length - 1].arrivalTime} - ${paquete[1].scales[paquete[1].scales.length - 1].arrival}`}</b></h4>
                                </div>
                                {paquete[1].scales.length ? 
                                <div className="CardHistory-IdaScales">
                                    <h5>Escalas</h5>
                                    <ul>
                                        {paquete[1].scales.map((e, i) => {
                                            return(
                                                <li key={i}>{`📍${e.departureAirport} - ${e.arrivalAirport} || ${e.departureTime} - ${e.arrivalTime
                                                } || ${e.departure}`}</li>
                                            )
                                        })}
                                    </ul>
                                </div> : null}
                                <div className="CardHistory-IdaExtra">
                                    <h6><b>Tipo:</b> {` ${paquete[1].type}`}</h6>
                                    <h6><b>Pagado:</b>{` $${paquete[1].price}`}</h6>
                                </div>
                            </div> : null}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}