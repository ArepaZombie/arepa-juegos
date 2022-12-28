import React from "react";

import './Tecla.css'

function Tecla({letra,revisarLetra}){
  return(
    <p className='a-tecla' 
    id={letra}
    onClick={revisarLetra}
    >{letra}</p>
  )
}

export default Tecla