import React from "react";
import './CartaM.css';

function CartaM({simbolo,volteada,descubierta,id,click}){

  return (
    <p className={`memory-card ${(descubierta||volteada) &&'v'}`}
    onClick={(e)=>!descubierta&&click(e)}
    id={id}>
      {!(descubierta||volteada)?'❔':simbolo}
    </p>
  )
}

export default CartaM;