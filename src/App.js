import React from 'react';
import './App.css';

//Modulos
import Menu from './modules/Menu';
import Game from './modules/Game';


function App() {
  const [game,setGame] = React.useState('menu')
  console.log(game)
  return (
    <div className="App">
      {
        game=='menu'?
        <Menu setgame={(a)=>setGame(a)}/>:
        <Game name={game}/>
      }
    </div>
  );
}

export default App;
