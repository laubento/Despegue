import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import '../Ofertas/Ofertas.css'
import { useHistory } from "react-router-dom";
import {notLogedForPurchase} from '../../utils/alerts.js'
import { useAuth0 } from "@auth0/auth0-react";
import { getPayment } from "../../Redux/Actions";
import dotenv from "dotenv";
dotenv.config();

export default function OfertasCard({oferts}){
    const dispatch = useDispatch()
    const history = useHistory()
    const { loginWithRedirect } = useAuth0();
    const user = JSON.parse(window.localStorage.getItem("user"))



    let items = [{
        title: "Paquete",
        description: 'Description',
        picture_url: "http://www.myapp.com/myimage.jpg",
        category_id: "category123",
        quantity: 1,
        unit_price: parseInt(oferts.price),
    }]

    const prueba = {
        body: {
            payer_email: "test_user_47008967@testuser.com",
            items,
            notification_url: "https://www.your-site.com/ipn",
            back_urls: {
                failure: "https://despegue.vercel.app/success",
                success: "https://despegue.vercel.app/failure",
            },
            "purpose": "wallet_purchase",
            "payment_methods": {
                "excluded_payment_types": [
                    {
                        "id": "ticket"
                    }
                ],
                "installments": 12
            },
        }
    }


    async function HandleClick (e){
        if(user){
            window.localStorage.removeItem("cartRespaldo")
            window.localStorage.setItem("oferts", JSON.stringify(oferts))
            await dispatch(getPayment(prueba))
            history.push('/purchase')
        }else{
            notLogedForPurchase(loginWithRedirect)
        }
    }





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
            <button className="Ofertas-BotonComprar" onClick={HandleClick}>Comprar</button>
        </div>
    )

}