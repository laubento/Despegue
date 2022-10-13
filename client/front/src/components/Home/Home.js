import React from 'react'
import { Link } from 'react-router-dom'
import Info from '../Info/Info'
// se usa info de momento


function Home() {
 
  return (
    <div>
      <Link to ='/flights'>
      <button>Flights</button>
      </Link>
      <Info/>
    </div>
  )
}

export default Home