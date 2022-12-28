import React from "react";

import Tecla from "./Tecla";
import Vidas from "./Vidas";
import GameOver from "../menu/GameOver"
import './Ahorcado.css'

/*Todas las letras en orden del teclado */
const qwerty = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ñ','Z','X','C','V','B','N','M']

function Ahorcado({setGame,dificultad}){
  const [palabra,setPalabra] = React.useState('');
  const [escondida,setEscondida] = React.useState('_');
  const [vida,setVida] = React.useState(10)
  const [gameover,setGameOver] = React.useState(false)

  let cant = 0;
  /* La cantidad de letras por dificultad */
  switch(dificultad){
    case 1: cant = 5;break;
    case 2: cant = 6;break;
    case 3: cant = 8;break;
  }

  /* Se llama a la api... la cantidad dice la cantidad de letras */
  React.useState(()=>{
    fetch('https://clientes.api.greenborn.com.ar/public-random-word?c=0&l='+cant)
    .then(r=>r.json())
    .then(i=>{
      setPalabra((i+"").toUpperCase()) //Se transforma a upper case por facilidad
      let e = "";
      for (let x in (i+"")){
        e+="_" //Y se crea una string escondida
      }
      setEscondida(e) // se guarda en el estado
    })
  },[]) //Una vez, solo cuando renderiza

  const revisarLetra = (e) =>{
    // Revisa si la letra ya fué usada
    if(e.target.className!=='a-usada'){
    const id = e.target.id;
    let tempEscondida = escondida
    e.target.className = 'a-usada';
    for (let x in palabra){
      let l;
      switch(palabra[x]){
        //Limpia los acentos
        case 'Á':l='A';break;
        case 'É':l='E';break;
        case 'Í':l='I';break;
        case 'Ó':l='O';break;
        case 'Ú':l='U';break;
        default: l=palabra[x];
      }
      if (l===id){/* //Si la letra existe dentro de la palabra creamos 
        una nueva string para la escondida, reemplazando los valores donde es necesario */
        let t =  tempEscondida.slice(0,x) + palabra[x] + tempEscondida.slice(parseInt(x)+1) + ""
        tempEscondida = t
      }
    }
    if(escondida===tempEscondida){setVida(vida-1)} //Si es que no se realizó ningun cambio, se le baja una vida
    else setEscondida(tempEscondida) //Si hubo cambios, se cambia la escondida, revelando la posición de la letra en cuestion
  }
  }

  //Revisar cada vez que cambia la vida o si cambia la escondida... si es que la escondida no tiene "_" o si nos quedamos sin vidas
  React.useEffect(()=>{(!(escondida.includes('_'))||vida<1) && setGameOver(true)},[escondida,vida])

  //Construcciond de las teclas
  const teclado = qwerty.map(l=><Tecla letra={l} key={l} revisarLetra={(e)=>revisarLetra(e)}/>)

  return(
    <div>
    {!gameover ? 
    <div id='ahorcado'>
      <h1 id='a-word'>{escondida}</h1>
        <div id="a-teclado">
          <p id="a-empty"></p>
          {teclado}
        </div>
        <div id='a-vidas'>
          <p>Vidas:</p>
          <Vidas largo={10} quedan={vida}/>
        </div>
    </div>
    :
    <div>
    <p>La palabra era: {palabra}</p>
    <GameOver puntaje={vida} 
      juego={'ahorcado'} 
      dificultad={dificultad}
      setGame={setGame}
      setGameOver={()=>setVida(10)}/>
    </div>}
    </div>
  )
}

export default Ahorcado;