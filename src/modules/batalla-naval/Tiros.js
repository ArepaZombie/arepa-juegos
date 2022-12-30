import React from "react";
import './Tiros.css';
import {faCaretUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tiros({largo,quedan}){
  let celdas = []
  
  for (let x=0;x<quedan;x++){
    celdas.push(<FontAwesomeIcon icon={faCaretUp} className={'celda-tiros '+'o'}   key={'l'+x}/>)
  }
  
  for (let x=0;x<largo-quedan;x++){
    celdas.push(<FontAwesomeIcon icon={faCaretUp}  className={'celda-tiros '+'x'}  key={'q'+x}/>)
  }

  return(
    <div className="tiros-conteiner">
      {celdas}
    </div>
    
  )
}

export default Tiros;