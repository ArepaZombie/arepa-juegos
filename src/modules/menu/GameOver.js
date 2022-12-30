import React from "react";
import './GameOver.css'
import './Boton.css';
//import scoresdb from '../scores.json'
//import * as fs from 'fs' <- THIS DOESN'T WORK





function GameOver({puntaje,juego,dificultad,setGame,setGameOver}){
  const [puntajeAlto, setPuntajeAlto] = React.useState(false)

  React.useEffect(()=>{
    if(puntaje>0){
      const score = localStorage.getItem(juego+'-'+dificultad)
      if (score===null || puntaje<score) {
        setPuntajeAlto(true)
        localStorage.setItem(juego+'-'+dificultad,puntaje)
      }
  }
  },[])

  

  return(
  <div id="gameover">
    <p>Juego finalizado!</p>
    <p>{puntaje>0?`Tu puntaje fue ${puntaje}`:'Perdiste :('}</p>
    {puntajeAlto && <p id="mensaje-puntaje-alto">Nuevo puntaje alto!</p>}
    <p className="btn" onClick={()=>setGame('menu')}>Volver al Menú</p>
    <p className="btn" onClick={()=>{
      setTimeout(()=>setGame(juego),1);
      setGame('');
      setGameOver();
    }
      }>Volver a Jugar</p>
  </div>)
}

export default GameOver;