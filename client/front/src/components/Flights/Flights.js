import React from 'react'
import Card from '../Card/Card'
import info from '../Data/data.js'
import '../styles/Flights.css'
// se usa info de momento


function Flights() {
 
  return (

    <div className='prueba'>
      <div className='container-cards'>
      {info.length && info.map(e => {
        return(
        <Card 
        key={e.id}
        airlinesName={e.airlinesNames.map(e => e).join('')}
        departureTime={e.departureTime}
        arrivalTime={e.arrivalTime}
        duration={e.duration}
        stopoversCount={e.stopoversCount}
        price={e.price}
        />
        )
      })}
      </div>
    </div>
  )
}

export default Flights