import React from "react";
import './BatallaNaval.css'

import Celda from "./Celda";
import GameOver from "../menu/GameOver"
import Barcos from "./Barcos";
import Tiros from "./Tiros";

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function BatallaNaval({setGame,dificultad}){
  const [tiros,setTiros] = React.useState(50);
  const [celdas,setCeldas] = React.useState([])
  const [barcos,setBarcos] = React.useState([[0]])
  const [gameover, setGameOver] = React.useState(false)
  const largoBarcos = [5,4,3,3,2,2,2]

  /*PARA CREAR LAS CELDAS */
  React.useEffect(() =>{
    
    let letras = 'ABCDEFGHIJ'
    let listaceldas = {} //Objeto que almacenará todas las celdas

    for (let x=0;x<=9;x++){
      for(let y=0;y<=9;y++){
        /* Se crea un objeto por cada celda */
        listaceldas[x+letras[y]] = {
          disparada:false,
          barco: false
        }
        
      }
    }


    /*Ahora ponemos los barcos */
    const barcos = largoBarcos.map((largo)=>{
      /*Seleccionamos un punto inicial al azar */
      let puntoinicial = [random(0,9),random(0,9)]
      while (listaceldas[puntoinicial[0]+letras[puntoinicial[1]]].barco){
        puntoinicial = [random(0,9),random(0,9)]
      }
      /* Y una direccion */
      let direccion = random(0,1);
      /* Colocamos una lista vacia para almacenar los puntos */
      let puntos = []
      /*Esta variable será un contador que se usará en caso de que 
      el barco no quepa en el espacio establecido */
      let pos = 1
      for (let x=0;x<largo;x++){
        /* Copiamos el punto inicial */
        let nuevoPunto = puntoinicial.slice()
        /* Seleccionamos un eje desde donde cambiará */
        let cambio = nuevoPunto[direccion] 
        /* Checamos si es que cabe dentro de la grid o si ya 
        se han puesto puntos en otro punto */
        if (cambio+x>9 ||pos>1){
          /* Si no cabe, se pone en la posicion relativa negativa
          y se aumenta para el siguiente punto */
          nuevoPunto[direccion] = cambio - pos
          if(nuevoPunto[direccion]<0){
            puntoinicial = [random(1,10),random(0,9)];
            direccion = random(0,1);
            x=0;
            continue
          }
          pos++ 
        }
        else{
          /* Si cabe... se pone adelante */
          nuevoPunto[direccion] = cambio + x
        }
        /* Se guarda el punto como una str */
        let strNuevoPunto = nuevoPunto[0]+letras[nuevoPunto[1]]
        /* Para revisar si es que hay un barco allí */
        if (listaceldas[strNuevoPunto].barco){
          nuevoPunto[direccion] = cambio - pos
          if(nuevoPunto[direccion]<0||listaceldas[nuevoPunto[0]+letras[nuevoPunto[1]]].barco){
            puntoinicial = [random(0,9),random(0,9)];
            direccion = random(0,1);
            x=0;
            continue
          }
        }
        /* Una vez listo el punto, se actualiza el valor en el objeto que
        contiene las celdas y se guarda en una lista */
        puntos.push(strNuevoPunto)
        listaceldas[strNuevoPunto] = {...listaceldas[strNuevoPunto],barco:true}
      }
      /* Se retornará un array con todos los puntos */
      return puntos
    })
    //Se guardan los barcos y las celdas en el estado
    setBarcos(barcos)
    setCeldas(listaceldas)
  },[])
  
  const disparo = (e) =>{
    if(!(celdas[e.target.id].disparada)){
      const celdaId = e.target.id
      let nuevasCeldas = {}
      for (let c of Object.keys(celdas)){
        let n = celdas[c]
        if(c===celdaId) {
          n={...celdas[c],disparada:true}
          if(n.barco){
            let nuevosBarcos= barcos.map((barco)=>barco.filter((x)=>x!==celdaId))
            setBarcos(nuevosBarcos)
          }
          else{setTiros(tiros-1)}
        }
        nuevasCeldas[c] = n
      }
      setCeldas(nuevasCeldas)
    }
  }
  
  const checkGameOver = () =>{
    if(tiros<1){return true}
    for(let barco of barcos){
      if(barco.length>0){return false}
    }
    return true
  }

  React.useEffect(()=> {if (checkGameOver()) setGameOver(true)},[tiros,barcos])

  const elementosCeldas = Object.keys(celdas).map(i=><Celda 
    id={i} disparada={celdas[i].disparada} barco={celdas[i].barco} key={i}
    disparo={(e)=>disparo(e)}/>)
  
  const dibujarBarcos = () => {
    let barcosElementos = []
    for (let x in largoBarcos){
      let quedan=0;
      try {
        quedan = barcos[x].length
      } catch (index) {
        quedan = 0
      }
      barcosElementos.push(<Barcos largo={largoBarcos[x]} quedan={quedan} key={x}/>)
    }
    return barcosElementos
  }
  
  return(
    <div>
      {!gameover?
      <div id="batalla-naval">
        <div>
          <p>Tiros</p>
          <Tiros largo={50} quedan={tiros}/>
        </div>
        <div id="tablero-batalla">
          {elementosCeldas}
        </div>
        <p>Barcos Faltantes:</p>
        <div id="barcos-faltantes">
          {dibujarBarcos()}
        </div>
      </div>
      :<GameOver 
          puntaje={tiros} 
          dificultad={dificultad} 
          juego="batalla" 
          setGame={setGame}
          setGameOver={()=>setTiros(50)}/>
      }
    </div>
  )
}


export default BatallaNaval;