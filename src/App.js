import React from 'react';
import './App.css';


//Modulos
import Menu from './modules/menu/Menu';
import Game from './modules/menu/Game';


function App() {
  const [game,setGame] = React.useState('menu')
  return (
    <div className="App">
      {
        game==='menu'?
        <Menu setgame={(a)=>setGame(a)}/>:
        <Game setGame={(a)=>setGame(a)} name={game}/>
      }
    </div>
  );
}

export default App;
