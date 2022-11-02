import React from "react";
import '../Home/CardPreguntas.css'

export default function CardPreguntas() {

    return (
        <div className="d-flex">
            <div className="CardPreguntas-Container">
                <h4>¿Cómo contactarte con Despegue?</h4>
                <b>Por teléfono:</b>
                <p>Si querés hacer una nueva compra o la tarjeta no aprobó tu pago, podés llamarnos al 0810-810-9992. Nuestro horario de atención es de lunes a viernes de 10 a 19 h y sábados y domingos de 10 a 16 h.</p>

                <b>Sucursales:</b>
                <p>Podés visitarnos en más de 10 sucursales en todo el país.</p>

                <b>Redes Sociales:</b>
                <p>Seguinos y envianos un mensaje directo en Facebook, Instagram o Twitter.</p>
            </div>

            <div className="CardPreguntas-Container">
                <h4>¿Puedo realizar cambios en mi vuelo?</h4>
                <p>
                    Para realizar un cambio en tu ticket, es importante que tengas presente las restricciones que hemos detallado en el voucher. Si tu vuelo permite cambios, podés gestionarlos llamando a nuestro centro de Atención al Cliente al 0810-810-9992. Recordá que los cambios están sujetos a la confirmación de la aerolínea. Llamanos al menos 72 horas hábiles antes de la fecha de inicio de tu servicio para poder gestionar tu pedido.
                </p>
            </div>

            <div className="CardPreguntas-Container">
                <h4>¿Dónde puedo chequear el estado de mi reserva?</h4>
                <p>
                Para conocer el estado de tu reserva, podés ingresar en la sección Mi Cuenta, en el margen superior derecho de la web o ingresando en la sección "Mi perfil" - "Mis viajes", en la App.
                    Si el viaje se muestra en esa ventana significa que tu vuelo sigue en curso.
                </p>
            </div>

            <div className="CardPreguntas-Container">
                <h4>¿Qué pasa si se rechazó el pago con mi tarjeta?</h4>
                <p>
                    En caso de que el pago con tu tarjeta de crédito sea rechazado te estaremos notificando vía mail para que te contactes con nosotros a al 0810-810-9992.
                    Es importante que no realices ninguna nueva compra luego de recibir el mail, dado que la reserva puede permanecer vigente más allá del rechazo y podrías tener cobros ya confirmados. Por lo tanto, es importante que te contactes con uno de nuestros agentes antes de efectuar cualquier tipo de gestión.
                </p>
            </div>
        </div>

    )
} 