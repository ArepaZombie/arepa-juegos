import React from "react";
import './GameOver.css'
import './Boton.css';
//import scoresdb from '../scores.json'
//import * as fs from 'fs' <- THIS DOESN'T WORK





function GameOver({puntaje,juego,dificultad,setGame,setGameOver}){
  
  React.useEffect(()=>{
    if(puntaje>0){
      const score = localStorage.getItem(juego+'-'+dificultad)
      console.log(score)
      if (score===null || puntaje<score) {
        localStorage.setItem(juego+'-'+dificultad,puntaje)
        alert('Puntaje alto!')
      }
  }
  },[])

  

  return(
  <div id="gameover">
    <p>Juego finalizado!</p>
    <p>{puntaje>0?`Tu puntaje fue ${puntaje}`:'Perdiste :('}</p>
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