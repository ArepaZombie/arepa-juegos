import React from "react";
import './GameOver.css'
import './Boton.css';
//import scoresdb from '../scores.json'
//import * as fs from 'fs' <- THIS DOESN'T WORK





function GameOver({puntaje,juego,dificultad,setGame,setGameOver}){
/*const [highScore,setHighScore] = React.useState(-1) 
  let scores = Array.from(scoresdb[juego][dificultad-1])

  React.useEffect(()=>{
    if(puntaje!=0){
      for (let x in scores){
        if(scores[x][0]>puntaje){setHighScore(x); console.log('a');break;}
      }
    }
  }
  ,[])

  console.log(highScore)

  const guardarPuntajeAlto = () =>{
    const name = document.getElementById('nombre').value.toUpperCase();

    alert('Puntaje guardado!')
    setHighScore(-1);
  }

  const PuntajeAlto = () =>{
    return(
      <div id='puntaje-alto'>
        <p>PUNTAJE ALTO</p>
        <div id="form-puntaje-alto">
          <input type='text' id='nombre' placeholder="Introduce tu nombre" ></input>
          <p className="btn" onClick={()=>guardarPuntajeAlto()}>Guardar</p>
        </div>
      </div>
    )
  } */

  return(
  <div id="gameover">
    <p>Juego finalizado!</p>
    <p>Tu puntaje fue {puntaje}</p>
    {/* {highScore>=0 && <PuntajeAlto/>} */}
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