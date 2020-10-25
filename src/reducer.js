import { generateEmptyBoard, checkGameStatus } from './minesweeper'
import {
  tileClicked,
  tileGroupClicked,
  mineFlagged,
  mineUnflagged,
  tilePressed,
  tileGroupPressed,
  releasePressed,
  TILE_CLICKED,
  TILE_GROUP_CLICKED,
  FLAG_TITLE,
  UNFLAG_TILE,
  TILE_PRESSED,
  TILE_GROUP_PRESSED,
  RELEASE_PRESSED,
  RESET
} from './actions'

export const DEFAULT_BOARD_SIZE = 10
export const DEFAULT_MINE_COUNT = 9

export const initialState = {
  gameState: 'initial',
  boardWidth: DEFAULT_BOARD_SIZE,
  boardHeight: DEFAULT_BOARD_SIZE,
  mineCount: DEFAULT_MINE_COUNT,
  board: generateEmptyBoard(DEFAULT_BOARD_SIZE, DEFAULT_BOARD_SIZE)
}

const reducer = (state, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        gameState: 'initial',
        boardWidth: action.config.boardWidth,
        boardHeight: action.config.boardHeight,
        mineCount: action.config.mineCount,
        board: generateEmptyBoard(action.config.boardWidth, action.config.boardHeight)
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
    case TILE_PRESSED:
      return tilePressed(action.x, action.y, state);
    case TILE_GROUP_PRESSED:
      return tileGroupPressed(action.x, action.y, state);
    case RELEASE_PRESSED:
      return releasePressed(state);
    default:
      throw new Error('Unexpected action');
  }
}

export default reducer
