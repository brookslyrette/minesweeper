import { useReducer, useState } from 'react';

import Board from './components/Board'
import reducer, { initialState, DEFAULT_BOARD_SIZE, DEFAULT_MINE_COUNT } from './reducer'

import './App.css';

function App() {
  const [ game, dispatch ] = useReducer(reducer, initialState)
  const [ difficulty, setDifficulty ] = useState({
    boardSize: DEFAULT_BOARD_SIZE,
    mineCount: DEFAULT_MINE_COUNT
  })

  const handleDifficultyChange = (event) => {
    switch (event.target.value) {
      case 'expert':
        setDifficulty({ boardSize: 25, mineCount: 99 });
        break;
      case 'intermediate':
        setDifficulty({ boardSize: 16, mineCount: 40 });
        break;
      default:
        setDifficulty({ boardSize: DEFAULT_BOARD_SIZE, mineCount: DEFAULT_MINE_COUNT });
        break;
    }
  }

  return (
    <div className="minesweeper">
      <div className="gameState">
        State: {game.gameState}
        <div>
          <span>Difficulty</span>
          <select onChange={handleDifficultyChange}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
          <button onClick={() => { dispatch({ type: 'reset', config: difficulty })}}>Reset</button>
        </div>
      </div>
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
