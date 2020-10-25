import { generateEmptyBoard, checkGameStatus } from './minesweeper'
import { tileClicked, tileGroupClicked, mineFlagged, mineUnflagged } from './actions'

const DEFAULT_BOARD_SIZE = 10
const DEFAULT_MINE_COUNT = 9

export const initialState = {
  gameState: 'initial',
  boardSize: DEFAULT_BOARD_SIZE,
  mineCount: DEFAULT_MINE_COUNT,
  board: generateEmptyBoard(DEFAULT_BOARD_SIZE)
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return {
        ...state,
        gameState: 'initial',
        board: generateEmptyBoard(DEFAULT_BOARD_SIZE)
      }
    case 'tile-click':
      const postClickState = tileClicked(action.x, action.y, state)
      return {
        ...postClickState,
        gameState: checkGameStatus(postClickState)
      };
    case 'tile-group-click':
      const postGroupClickState = tileGroupClicked(action.x, action.y, state);
      return {
        ...postGroupClickState,
        gameState: checkGameStatus(postGroupClickState)
      };
    case 'flag-tile':
      return mineFlagged(action.x, action.y, state);
    case 'unflag-tile':
      return mineUnflagged(action.x, action.y, state);
    default:
      throw new Error('Unexpected action');
  }
}

export default reducer
