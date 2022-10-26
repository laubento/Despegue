import React from "react"
import "./Info.css"


export default function Record() {

    let record = JSON.parse(localStorage.getItem('record'))
    console.log(record)
    return(
        <div>
            
        </div>
    )
}