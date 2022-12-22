import React from 'react';

//Modulos de juegos
import Memoria from './memoria/Memoria';

function Game({name,setGame}){
  let out = <p>vacio</p>
  switch(name){
    case 'memoria':out=<Memoria setGame={setGame} key='0'/>; break;
  }

  return(
    <div id='game'>{out}</div>
    
  )
}

export default Game;