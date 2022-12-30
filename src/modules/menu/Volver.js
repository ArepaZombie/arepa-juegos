import React from "react"
import './Volver.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRotate } from '@fortawesome/free-solid-svg-icons'

function Volver({setGame,juego,dificultad}){
  const score = localStorage.getItem(juego+'-'+dificultad)
  return(
    <div id='volver'>
      <div id='btn-volver'>
        <p className='btn-volver' onClick={()=>setGame('menu')}><FontAwesomeIcon icon={faHouse} /></p>
        {dificultad>0&&<p 
          className='btn-volver'
          onClick={()=>{
            setTimeout(()=>setGame(juego),1);
            setGame('');
        }}><FontAwesomeIcon icon={faRotate} /></p>}
      </div>
      <p>{score!==null&&'Puntaje alto: '+score}</p>
    </div>
  )
}

export default Volver