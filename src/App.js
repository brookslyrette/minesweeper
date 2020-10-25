import { useReducer } from 'react';

import Board from './components/Board'
import reducer, { initialState } from './reducer'

import './App.css';

function App() {
  const [ game, dispatch ] = useReducer(reducer, initialState)

  return (
    <div className="minesweeper">
      {game.gameState} <button onClick={() => { dispatch({ type: 'reset' })}}>Reset</button>
      <Board game={game} dispatch={dispatch} />
      <div className="controls">
        <b>Controls</b> <br/>
        Click: Open tile <br/>
        Shift + click: Open tile group <br/>
        Right click: Flag/Unflag tile
      </div>
    </div>
  );
}

export default App;
