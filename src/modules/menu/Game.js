import React from 'react';
import './Boton.css';
import './Game.css';
//Modulos de juegos
import Memoria from '../memoria/Memoria';


function Game({name,setGame}){
  const [dificultad,setDificultad] = React.useState(0)
  let out = <p>Error</p>


  switch(name){
    case 'memoria': out=<Memoria dificultad={dificultad} setGame={setGame} key='0'/>; break;
    default: <p>Error</p>
  }


  return(
    <div id='game'>{
      dificultad===0?
      <div id='dificultad'>
        <h2>Seleccione dificultad</h2>
        <p className='btn' onClick={()=>setDificultad(1)}>Facil</p>
        <p className='btn' onClick={()=>setDificultad(2)}>Medio</p>
        <p className='btn' onClick={()=>setDificultad(3)}>Dificil</p>
      </div>
      :
      out
      }</div>
  )
}

export default Game;