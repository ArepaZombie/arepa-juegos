import React from "react";
import CartaM from "./CartaM";
import './Memoria.css'

function Memoria(){
  const [jugada,setJugada] = React.useState(0);
  const [movimientos,setMovimientos]   = React.useState(0);
  const [cartas,setCartas] = React.useState([]);
  const [cartaSeleccionada,setCartaSeleccionada] = React.useState([])

  /*Lo que ocurre al darle click a una carta */
  const voltearCarta= (e)=>{
    setJugada(jugada+1)
    let targetId = e.target.id;
    if (jugada < 2){
      setCartaSeleccionada([...cartaSeleccionada,targetId])
      setCartas(cartas.map(i=>{
        if(targetId == i.key) {
          return {...i, 'volteada':true}};
        return i
    })) 
  }
  }

  /*Comparar las cartas que fueron seleccionadas */
  React.useEffect( () =>{
    if(cartaSeleccionada.length==2){
      setTimeout(()=>{
        let i1 = cartaSeleccionada[0]
        let i2 = cartaSeleccionada[1]
        console.log(i1)
        console.log(i2)
        console.log(i1[0]==i2[0])
        if(i1[0]==i2[0]){
          setCartas(cartas.map(i=>{
              if(i1 == i.key || i2 == i.key) {
                return {...i, 'descubierta':true}};
              return i
            })) 
          }
        else setCartas(cartas.map(i=>{return{...i,'volteada':false}}))
        setCartaSeleccionada([])
        setMovimientos(movimientos+1)
        setJugada(0)},1000)}
  },[jugada])

  /*Para la creacion de cartas */
  const crearCartas = () => {
    /*Creamos una serie de cartas por cada simbolo */
    let listaCartas = ['💀','👻','👽','🎃'].map((e,i)=>{
      return({
        'simbolo':e,
        'volteada':false,
        'descubierta':false,
        'key':i+'1'
    })}
    )
      let listaCartas2 = ['💀','👻','👽','🎃'].map((e,i)=>{
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
    click={(e)=>voltearCarta(e)}
    key={i.key} id={i.key}
/>})



  return(
    <div id='memoria'>
        {jugada+' '+movimientos}
      <div id='tablero'>
        {crearCartasElementos()}
      </div>

    </div>
  )
}


export default Memoria;