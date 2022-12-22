import React from "react";
import './GameOver.css'
import './Boton.css';

function GameOver({puntaje,juego,setGame}){

  return(<div id="gameover">
    <p>Juego finalizado!</p>
    <p>Tu puntaje fue {puntaje}</p>
    <p className="btn" onClick={()=>setGame('menu')}>Volver al Menú</p>
    <p className="btn" onClick={()=>{
      setTimeout(()=>setGame(juego),1)
      setGame('')}}>Volver a Jugar</p>
  </div>)
}

export default GameOver;