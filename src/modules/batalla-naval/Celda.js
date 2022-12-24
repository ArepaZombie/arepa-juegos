import React from "react";
import './Celda.css'
/* ⭕❌ */
function Celda(props){
  return(
    <p className={`celda ${props.disparada&&'disparada'} ${props.barco&&'barco'}`}
    disparada={props.disparada.toString()}
    onClick={(e)=>props.disparo(e)}
    id={props.id}>
      {props.disparada && '⭕'}
    </p>
  )
}

export default Celda;