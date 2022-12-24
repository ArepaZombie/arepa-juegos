import React from "react";
import './Celda.css'
/* ⭕❌ */
function Celda(props){
  return(
    <p className={`celda ${props.barco && props.disparada? 'barco' :props.disparada&&'disparada'}`}
    onClick={(e)=>props.disparo(e)}
    id={props.id}>
      {props.barco && props.disparada? '❌' : props.disparada && '⭕'}
    </p>
  )
}

export default Celda;