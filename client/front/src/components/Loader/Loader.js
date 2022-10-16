import React from "react";
import img from '../../Images/Loader PF.gif'
// se usa info de momento

export default function Loader() {
    return (
        <div className="p-4">
            <img src={img} alt="Loader Img"/>
        </div>
    );
}

