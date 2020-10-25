import { useReducer, useState } from 'react';

import Board from './components/Board'
import reducer, { initialState, DEFAULT_BOARD_SIZE, DEFAULT_MINE_COUNT } from './reducer'

import './App.css';

function App() {
  const [ game, dispatch ] = useReducer(reducer, initialState)
  const [ difficulty, setDifficulty ] = useState({
    boardHeight: DEFAULT_BOARD_SIZE,
    boardWidth: DEFAULT_BOARD_SIZE,
    mineCount: DEFAULT_MINE_COUNT
  })
  const itemsFlagged = game.board.filter(t => t.isFlagged)
  const itemsPressed = game.board.filter(t => t.isPressed)

  const handleDifficultyChange = (event) => {
    let { mineCount, boardWidth, boardHeight } = difficulty
    if (event.target.value === 'expert') {
      mineCount = 99
      boardHeight = 16
      boardWidth = 30
    } else if (event.target.value === 'intermediate') {
      mineCount = 40
      boardHeight = 16
      boardWidth = 16
    } else if (event.target.value === 'beginner') {
      mineCount = DEFAULT_MINE_COUNT
      boardHeight = DEFAULT_BOARD_SIZE
      boardWidth = DEFAULT_BOARD_SIZE
    }
    if (game.gameState !== 'in-progress') {
      dispatch({ type: 'reset', config: { boardHeight, boardWidth, mineCount } })
    }
    setDifficulty({ boardHeight, boardWidth, mineCount, isCustom: event.target.value === 'custom' });
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

  const handleValueChange = (value, field) => {
    // you can't place more bombs than the size of the grid - 2
    if (value < 1 || (field === 'mineCount' && value > (difficulty.boardHeight * difficulty.boardWidth -2 ))) {
      return
    }
    setDifficulty({
      ...difficulty,
      [field]: value
    })
    dispatch({ type: 'reset', config: {
      ...difficulty,
      [field]: value
    } })
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
            <option value="custom">Custom</option>
          </select>
          {difficulty.isCustom && (
            <form>
              <label>rows:</label>
              <input onChange={(e) => handleValueChange(e.target.value, 'boardHeight')} type="number" value={difficulty.boardHeight} disabled={game.gameState === 'in-progress'} /> <br/>
              <label>columns:</label>
              <input onChange={(e) => handleValueChange(e.target.value, 'boardWidth')}  type="number" value={difficulty.boardWidth} disabled={game.gameState === 'in-progress'} /> <br/>
              <label>bombs:</label>
              <input onChange={(e) => handleValueChange(e.target.value, 'mineCount')} type="number" value={difficulty.mineCount} disabled={game.gameState === 'in-progress'} /> <br/>
            </form>
          )}
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
