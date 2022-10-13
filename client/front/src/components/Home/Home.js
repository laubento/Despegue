import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
// se usa info de momento


function Home() {
 
  return (
    <div>
      <Link to ='/flights'>
      <button>Flights</button>
      </Link>
    </div>
  )
}

export default Home