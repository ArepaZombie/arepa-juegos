import React from 'react';
import './Menu.css';

function Menu({setgame}){
  const listaJuegos = {
    'memoria':<span>Memoria</span>,
    'batalla':<span>Batalla <br></br> Naval</span>/*,
    'ahorcado':<span>Ahorcado</span>,
    'cachito':<span>Cachito <br></br> 🎲🎲</span>,
    'sudoku':<span>Sudoku</span>,
    'sopa':<span>Sopa de Letras</span>,
    'crucigrama':<span>Crucigrama</span>,
    'tres': <span>Tres en Raya</span> */
  }

  const Opcion = ({juego,texto})=>{
    return(
      <p id={'opc-'+juego} className='opcion' onClick={()=>empezarJuego(juego)}>{texto}</p>
    )
  }
  
  const empezarJuego = (a) =>{
    setgame(a)
  }

  const opciones = Object.keys(listaJuegos).map(i=><Opcion juego={i} 
    texto={listaJuegos[i]}
    key={i}/>)

  return(
    <div id='menu'>
      <h3>ArepaZombie's</h3>
      <h2>Game Table</h2>
      <div id='opciones'>
        {opciones}
      </div>
    </div>
  )
}

export default Menu;


