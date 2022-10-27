import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import '../Ofertas/Ofertas.css'

export default function OfertasCard({oferts}){
    const dispatch = useDispatch()

    console.log(oferts)
    return(
        <div className="Ofertas-ContainerPrincipal">
            <div className="Ofertas-Cabecera">
                <img className="Ofertas-IMG" src={oferts.image} alt="Portada"/>
                <p>{`${oferts.day} Dias / ${oferts.nigth} Noche`}</p>
            </div>
            <div className="Ofertas-Titulo ps-2 pt-2">
                <h4>{`Paquete a ${oferts.name}`}</h4>  
                <h6>{`Desde ${oferts.dateFrom} - hasta ${oferts.dateTo}`}</h6>
            </div>
            <div className="Ofertas-Info ps-2">
                <p>{`✈️ Vuelo directo ${oferts.nameAirportFrom} - ${oferts.nameAirportTo}`}</p>
                <p>{`🏥 Asistencia ${oferts.asistans}`}</p>
                <div className="Ofertas-Puntaje">
                    <p className="me-1">Puntaje</p>
                    {oferts.rating >= 1 ? <span>★</span> : null}
                    {oferts.rating >= 2 ? <span>★</span> : null}
                    {oferts.rating >= 3 ? <span>★</span> : null}
                    {oferts.rating >= 4 ? <span>★</span> : null}
                    {oferts.rating >= 5 ? <span>★</span> : null}
                </div>
            </div>
            <hr />
            <div className="p-2 Ofertas-Precio">
                <h6>Precio final por persona</h6>
                <h2 className="m-0">{`$${oferts.price}`}</h2>
                <p>Incluye impuestos, tasas y cargos</p>
            </div>
        </div>
    )

}