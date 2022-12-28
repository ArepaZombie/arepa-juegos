import React from "react";
import './Vidas.css'

function Vidas({largo,quedan}){
  let celdas = []
  
  for (let x=0;x<largo-quedan;x++){
    celdas.push(<p  className={'celda-vidas '+'x'}  key={'q'+x}></p>)
  }
  
  for (let x=0;x<quedan;x++){
    celdas.push(<p className={'celda-vidas '+'o'}   key={'l'+x}></p>)
  }

  return(
    <div className="vidas-conteiner">
      {celdas}
    </div>
    
  )
}

export default Vidas;