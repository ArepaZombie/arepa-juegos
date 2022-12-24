import React from "react";
import './BatallaNaval.css'
import Celda from "./Celda";

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function BatallaNaval({setGame}){
  const [tiros,setTiros] = React.useState(30);
  const [celdas,setCeldas] = React.useState([])
  
  /*PARA CREAR LAS CELDAS */
  React.useEffect(() =>{
    let letras = 'ABCDEFGHIJ'
    let listaceldas = {}
    for (let x=1;x<=10;x++){
      for(let y=0;y<=9;y++){
        listaceldas[x+letras[y]] = {
          disparada:false,
          barco: false
        }
        
      }
    }
    
    /*Ahora ponemos los barcos */
    const barcos = [5,4,3,3,2].map((largo)=>{
      let puntoinicial = [random(1,10),random(0,9)]
      let direccion = random(0,1);
      let limite = direccion == 0 ? 10:9
      let puntos = []
      let pos = 1
      for (let x=0;x<largo;x++){
        let nuevoPunto = puntoinicial.slice()
        let cambio = nuevoPunto[direccion] 
        if (cambio+x>limite || pos>1){
          nuevoPunto[direccion] = cambio - pos
          pos++ 
        }
        else{
          nuevoPunto[direccion] = cambio + x
        }
        let strNuevoPunto = [nuevoPunto[0],letras[nuevoPunto[1]]].join("")
        if (listaceldas[strNuevoPunto].barco){
          nuevoPunto[direccion] = cambio - pos
          pos++
          strNuevoPunto = [nuevoPunto[0],letras[nuevoPunto[1]]].join("")
        }
        puntos.push(strNuevoPunto)
        listaceldas[strNuevoPunto] = {...listaceldas[strNuevoPunto],barco:true}
      }
      return puntos
    })

    setCeldas(listaceldas)
  },[])
  
  const disparo = (e) =>{

    if(!(celdas[e.target.id].disparada)){
      setTiros(tiros-1)
      const celdaId = e.target.id
      let nuevasCeldas = {}
      for (let c of Object.keys(celdas)){
        let n = celdas[c]
        if(c===celdaId) n={...celdas[c],disparada:true}
        nuevasCeldas[c] = n
      }
      setCeldas(nuevasCeldas)
    }
  }
  

  const elementosCeldas = Object.keys(celdas).map(i=><Celda 
    id={i} disparada={celdas[i].disparada} barco={celdas[i].barco} key={i}
    disparo={(e)=>disparo(e)}/>)

  return(
    <div id="batalla-naval">
      <p>Tiros: {tiros}</p>
      <div id="tablero">
        {elementosCeldas}
      </div>
    </div>
  )
}


export default BatallaNaval;