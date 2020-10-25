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
    </div>
  );
}

export default App;
