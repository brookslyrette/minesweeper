import { generateEmptyBoard, checkGameStatus } from './minesweeper'
import { tileClicked, tileGroupClicked, mineFlagged, mineUnflagged, TILE_CLICKED, TILE_GROUP_CLICKED, FLAG_TITLE, UNFLAG_TILE, RESET } from './actions'

export const DEFAULT_BOARD_SIZE = 10
export const DEFAULT_MINE_COUNT = 9

export const initialState = {
  gameState: 'initial',
  boardSize: DEFAULT_BOARD_SIZE,
  mineCount: DEFAULT_MINE_COUNT,
  board: generateEmptyBoard(DEFAULT_BOARD_SIZE)
}

const reducer = (state, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        gameState: 'initial',
        boardSize: action.config.boardSize,
        mineCount: action.config.mineCount,
        board: generateEmptyBoard(action.config.boardSize)
      }
    case TILE_CLICKED:
      const postClickState = tileClicked(action.x, action.y, state)
      return {
        ...postClickState,
        gameState: checkGameStatus(postClickState)
      };
    case TILE_GROUP_CLICKED:
      const postGroupClickState = tileGroupClicked(action.x, action.y, state);
      return {
        ...postGroupClickState,
        gameState: checkGameStatus(postGroupClickState)
      };
    case FLAG_TITLE:
      return mineFlagged(action.x, action.y, state);
    case UNFLAG_TILE:
      return mineUnflagged(action.x, action.y, state);
    default:
      throw new Error('Unexpected action');
  }
}

export default reducer
