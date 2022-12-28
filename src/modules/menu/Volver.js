import React from "react"
import './Volver.css'

function Volver({setGame,juego,dificultad}){
  const score = localStorage.getItem(juego+'-'+dificultad)
  return(
    <div id='volver'>
      <p id='btn-volver' onClick={()=>setGame('menu')}>{'Menu'}</p>
      <p>{score!==null&&'Puntaje alto: '+score}</p>
    </div>
  )
}

export default Volver