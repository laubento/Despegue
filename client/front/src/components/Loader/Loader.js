import React from "react";
import img from '../../Images/Loader PF.gif'
// se usa info de momento

export default function Loader() {
    return (
        <div className="p-4">
            <img src={img} alt="Loader Img"/>
            <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    );
}

