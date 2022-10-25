import React from "react";
import OfertasCard from "./Ofertas";
import { useEffect } from "react";
import '../Ofertas/Ofertas.css'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { listOffers, listUsers } from "../../Redux/Actions";
import Portada from '../../Images/Promociones/PortadaOfertas.png'

export default function OfertasContainer(){
    const dispatch = useDispatch()
    useEffect(e => {
        dispatch(listUsers())
        dispatch(listOffers())
    }, [dispatch])

    const users = useSelector(state => state.listUsers);
    const offers = useSelector(state => state.offersList);

    return(
        <div className="Ofertas-ContainerPrincipal-Principal">
           <div className="Help-ContainerPortada">
                <img src={Portada} alt="Portada"/>
           </div>
           <div className="container Ofertas-ContainerCard">
            {offers.length >= 1 ? offers.map((e, i) => {
                return(
                    <div key={i}>
                        <OfertasCard oferts={e} />
                    </div>
                )
            }) : null}
           </div>
        </div>
    )
}