import React from "react";
import GameOver from "../menu/GameOver";
import CartaM from "./CartaM";
import './Memoria.css'

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function Memoria({setGame,dificultad}){
  React.useEffect(()=>{
    document.body.style.backgroundColor = "#063e53"},[])

  const [jugada,setJugada] = React.useState(0);
  const [movimientos,setMovimientos]   = React.useState(0);
  const [cartas,setCartas] = React.useState([]);
  const [cartaSeleccionada,setCartaSeleccionada] = React.useState([])

  /*Lo que ocurre al darle click a una carta */
  const voltearCarta = (e)=>{
    setJugada(jugada+1)
    let targetId = e.target.id;
    if (jugada < 2){
      setCartaSeleccionada([...cartaSeleccionada,targetId])
      setCartas(cartas.map(i=>{
        if(targetId  === i.key) {
          return {...i, 'volteada':true}};
        return i
      })) 
    }
  }

  const revisarVolteada = (e)=>{
    let i = e.target.id;
    for (let carta of cartas){
      if(carta.key   === i){
        return carta.volteada}
    }
    return true
  }

  /*Comparar las cartas que fueron seleccionadas */
  React.useEffect( () =>{
    if(cartaSeleccionada.length ===2){
      setTimeout(()=>{
        let i1 = cartaSeleccionada[0]
        let i2 = cartaSeleccionada[1]
        if(i1.slice(0,i1.length-1) ===i2.slice(0,i2.length-1)){
          setCartas(cartas.map(i=>{
              if(i1  === i.key || i2  === i.key) {
                return {...i, 'descubierta':true}};
              return i
            })) 
          }
        else setCartas(cartas.map(i=>{return{...i,'volteada':false}}))
        setCartaSeleccionada([]) 
        setMovimientos(movimientos+1)
        setJugada(0)},500)}
  },[jugada])

  /*Para la creacion de cartas */
  const crearCartas = () => {
    /*Emojis a usar */
    let emojis = ['🤡','👻','💀','☠','👽','🤖','🎃','😼','🦴','🦷',
    '🦾','🧡','💛','💚','💙','💜','🤎','🖤','🤍','🤮','🌷','🐍','🐬','🍀','🐙',
    '🦑','🍆','🍚','🍧','🍕','🍺','🏆','🎱','🎸','🎨','🎬','🎧','🚀','🚨',
    '⏳','💣','🎩','💉','🧲','🧿','🪓','🎵','🌳','🌵','🌴']

    /*Cuantos emojis se usaran */
    let cantCartas = 0;
    switch(dificultad){
      case 1: cantCartas = 4; break;
      case 2: cantCartas = 8; break;
      case 3: cantCartas = 16; break;
      default: cantCartas = 4;
    }

    /*Seleccionamos x emojis al azar */
    let emojisSeleccionados = [...Array(cantCartas).keys()].map(()=>emojis[random(0,emojis.length-1)])
    
    /*Checamos que no hayan repetidos */
    for (let x=0;x<emojisSeleccionados.length;x++){
      for (let i=1;i<emojisSeleccionados.length;i++){
        
        if (!(x>=i) && emojisSeleccionados[x] ===emojisSeleccionados[i]){
          emojisSeleccionados[x] = emojis[random(0,emojis.length)]
          x=0;
          i=1;
          continue
        }
      }    
    }
    /*Creamos una serie de cartas por cada simbolo */
    let listaCartas = emojisSeleccionados.map((e,i)=>{
      return({
        'simbolo':e,
        'volteada':false,
        'descubierta':false,
        'key':i+'1'
    })}
    )
      let listaCartas2 = emojisSeleccionados.map((e,i)=>{
        return({
          'simbolo':e,
          'volteada':false,
          'descubierta':false,
          'key':i+'2'
        })}
      )
    /*Lo duplicamos para que haya un par por simbolo */
    listaCartas = listaCartas.concat(listaCartas2)
  
    /*Randomizamos el orden*/
    for (let i = listaCartas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [listaCartas[i], listaCartas[j]] = [listaCartas[j], listaCartas[i]];
    }
    
    return listaCartas;
  }
  /*Así solo se genera cada nuevo juego */
  React.useEffect(()=>setCartas(crearCartas()),[])

  let crearCartasElementos = () => cartas.map((i)=>{
  return <CartaM 
    simbolo={i.simbolo}
    volteada={i.volteada}
    descubierta={i.descubierta}
    click={(e)=>!(revisarVolteada(e)) && voltearCarta(e)}
    key={i.key} id={i.key}
/>})

  const gameover = ()=>{
    for (let carta of cartas){
      if(!carta.descubierta) return false
    }
      return true
  }
  


  return(
    <div id='memoria'>
        <p id='volver' onClick={()=>setGame('menu')}>{'Menu'}</p>
        <p id="movimientos">{"Movimientos: "+movimientos}</p>
      <div id='tablero'>
        {crearCartasElementos()}
      </div>
        {gameover() && <GameOver 
          puntaje={movimientos} 
          dificultad={dificultad} 
          juego="memoria" 
          setGame={setGame}/>}
    </div>
  )
}


export default Memoria;