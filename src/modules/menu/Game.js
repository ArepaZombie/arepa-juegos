import React from 'react';
import './Boton.css';
import './Game.css';
//Modulos de juegos
import Memoria from '../memoria/Memoria';
import Volver from './Volver';
import BatallaNaval from '../batalla-naval/BatallaNaval';
import Ahorcado from '../ahorcado/Ahorcado';


function Game({name,setGame}){
  const [dificultad,setDificultad] = React.useState(0)
  let out = <div id='error'>Error</div>


  const background = (a) =>{
    document.body.style.backgroundColor = a
  }

  switch(name){
    case 'memoria': out=<Memoria dificultad={dificultad} setGame={setGame} key='0'/>; background('#063e53'); break;
    case 'batalla': out=<BatallaNaval dificultad={dificultad} setGame={setGame} key='1'/>; background('#990000'); break;
    case 'ahorcado': out=<Ahorcado dificultad={dificultad} setGame={setGame} key='2'/>; background('#81a432'); break;
    default: <p>Error</p>
  }


  return(
    <div id='game'>
      <Volver setGame={setGame}/>
      {name!=='batalla'&&dificultad===0?
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