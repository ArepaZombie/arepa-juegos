import React from "react"
import './Volver.css'

function Volver({setGame}){
  return(
    <p id='volver' onClick={()=>setGame('menu')}>{'Menu'}</p>
  )
}

export default Volver