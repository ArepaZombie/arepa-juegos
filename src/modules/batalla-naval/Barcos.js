import React from "react";
import './Barcos.css'

function Barcos({largo,quedan}){
  let celdas = []
  
  for (let x=0;x<largo-quedan;x++){
    celdas.push(<p  className={'celda-barco '+'x'}  key={'q'+x}></p>)
  }
  
  for (let x=0;x<quedan;x++){
    celdas.push(<p className={'celda-barco '+'o'}   key={'l'+x}></p>)
  }

  return(
    <div className="barco-conteiner">
      {celdas}
    </div>
    
  )
}

export default Barcos;