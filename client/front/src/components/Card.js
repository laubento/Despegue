import React from 'react'
import info from './data.js'
import { Box } from "@chakra-ui/core"

function Card() {
    console.log(info)

  return (
    <div>{info.length && info.map(e => {
        return(
            <Box w='200px' bg='tomato' key={e.id}>
            <h1>{e.airlinesNames.map(e => e).join('')}</h1>
            <span>{e.departureTime}</span>
            <span>{e.arrivalTime}</span>
            <h3>{e.duration}</h3>
            <h4>{e.stopoversCount}</h4>
            <h5 >{e.price}</h5>
            <span>-----</span>
            </Box>
            )   
    })}</div>
  )
}

export default Card