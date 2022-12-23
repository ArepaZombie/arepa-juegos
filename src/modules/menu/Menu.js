import React from 'react';
import './Menu.css';

function Opcion(props){
  
}

function Menu({setgame}){

  const empezarJuego = () =>{
    setgame('memoria')
  }

  return(
    <div id='menu'>
      <h3>ArepaZombie's</h3>
      <h2>Game Table</h2>
      <p className='opcion' onClick={()=>empezarJuego()}>Memoria</p>


    </div>
  )
}

export default Menu;


