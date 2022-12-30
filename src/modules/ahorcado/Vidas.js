import React from "react";
import './Vidas.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Vidas({largo,quedan}){
  let celdas = []
  
  for (let x=0;x<quedan;x++){
    celdas.push(<p><FontAwesomeIcon className={'celda-vidas '+'o'}   key={'l'+x}  icon={faHeart}/></p>)
  }
  
  for (let x=0;x<largo-quedan;x++){
    celdas.push(<p><FontAwesomeIcon className={'celda-vidas '+'x'}  key={'q'+x} icon={faHeart}/></p>)
  }

  return(
    <div className="vidas-conteiner">
      {celdas}
    </div>
    
  )
}

export default Vidas;