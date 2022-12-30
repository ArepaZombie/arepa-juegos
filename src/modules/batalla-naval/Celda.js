import React from "react";
import './Celda.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleXmark } from "@fortawesome/free-regular-svg-icons";

function Celda(props){
  return(
    <p className={`celda ${props.barco && props.disparada? 'barco' :props.disparada&&'disparada'}`}
    onClick={(e)=>props.disparo(e)}
    id={props.id}>
      {props.barco && props.disparada? <FontAwesomeIcon icon={faCircleXmark}/> : 
      props.disparada && <FontAwesomeIcon icon={faCircle}/>}
    </p>
  )
}

export default Celda;