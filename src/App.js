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
  const itemsFlagged = game.board.filter(t => t.isFlagged)
  const itemsPressed = game.board.filter(t => t.isPressed)

  const handleDifficultyChange = (event) => {
    let mineCount = DEFAULT_MINE_COUNT
    let boardSize = DEFAULT_BOARD_SIZE
    if (event.target.value === 'expert') {
      mineCount = 99
      boardSize = 25
    } else if (event.target.value === 'intermediate') {
      mineCount = 40
      boardSize = 16
    }
    if (game.gameState === 'initial') {
      dispatch({ type: 'reset', config: { boardSize, mineCount } })
    }
    setDifficulty({ boardSize, mineCount });
  }

  const getGameStateIcon = (gameState) => {
    if (gameState === 'lost') {
      return '💀'
    } else if (gameState === 'won') {
      return '🎉'
    } else if (itemsPressed.length > 0) {
      return '😯'
    }
    return '🙂'
  }

  return (
    <div className="minesweeper">
      <div className="gameState">
        <button className="icon" onClick={() => { dispatch({ type: 'reset', config: difficulty }) }}>{getGameStateIcon(game.gameState)}</button>
        <div>
          <span>Difficulty</span>
          <select onChange={handleDifficultyChange} disabled={game.gameState === 'in-progress'}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <span>Bombs left: {game.mineCount - itemsFlagged.length}</span>
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
