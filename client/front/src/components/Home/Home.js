import React from 'react'
import { Link } from 'react-router-dom'
import Info from '../Info/Info'
import Card from '../Card/Card'

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