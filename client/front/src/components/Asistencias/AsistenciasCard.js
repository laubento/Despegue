import React from "react";


export default function AsistenciasCard(){


    function calculardiasDiscount() {
        var timeStart = new Date(document.getElementById("timeStart").value);
        var timeEnd = new Date(document.getElementById("timeEnd").value);
        var actualDate = new Date();
        if (timeEnd > timeStart)
        {
            var diff = timeEnd.getTime() - timeStart.getTime();
            document.getElementById("daysDiscount").value = Math.round(diff / (1000 * 60 * 60 * 24));
        }
        else if (timeEnd != null && timeEnd < timeStart) {
            alert("La fecha final de la promoción debe ser mayor a la fecha inicial");
            document.getElementById("daysDiscount").value = 0;
        }
    }

    return(
        <div>
            {/* <label>Fecha de inicio</label>
            <input type="date" id="timeStart" className="form-control" onInput={calculardiasDiscount} />
            <label>Fecha fin</label>
            <input type="date" id="timeEnd" class="form-control" onInput={calculardiasDiscount} />
            <label>Días</label>
            <input class="form-control" id="daysDiscount"></input> */}
        </div>
        


    )
}