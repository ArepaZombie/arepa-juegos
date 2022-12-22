import React from 'react';
import './Menu.css';

function Opcion(props){
  
}

function Menu({setgame}){

  const empezarJuego = () =>{
    setgame('memoria')
  }

  return(
    <div>
      <h2>ArepaZombie's</h2>
      <h3>Game Table</h3>
      <p className='opcion' onClick={()=>empezarJuego()}>Memoria</p>


    </div>
  )
}

export default Menu;


