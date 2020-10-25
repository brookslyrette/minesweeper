import { openTile, isNeighbour, generateBoard } from './minesweeper'

export const TILE_CLICKED = 'tile-click'
export const TILE_GROUP_CLICKED = 'tile-group-click'
export const FLAG_TITLE = 'flag-tile'
export const UNFLAG_TILE = 'unflag-tile'
export const RESET = 'reset'
export const TILE_PRESSED = 'tile-press'
export const TILE_GROUP_PRESSED = 'tile-group-press'
export const RELEASE_PRESSED = 'release-pressed'

export const tileGroupClicked = (clickedX, clickedY, state) => {
  if (state.gameState === 'in-progress') {
    const clicked = state.board.find(t => t.id === `${clickedX}:${clickedY}`)
    const neighbours = state.board.filter(t => isNeighbour(t, clicked) && !t.isOpen && !t.isFlagged)

    openTile(clicked, state)
    neighbours.forEach(n => openTile(n, state));
  }
  return {
    ...state
  }
}

export const tileClicked = (clickedX, clickedY, state) => {
  const clicked = state.board.find(t => t.id === `${clickedX}:${clickedY}`)
  if (state.gameState === 'initial') {
    generateBoard(clickedX, clickedY, state)
    openTile(clicked, state)
  } else if (state.gameState === 'in-progress') {
    openTile(clicked, state)
  }
  return {
    ...state
  };
}

export const mineFlagged = (clickedX, clickedY, state) => {
  if (state.gameState === 'in-progress') {
    const clicked = state.board.find(t => t.id === `${clickedX}:${clickedY}`)
    clicked.isFlagged = true
  }

  return {
    ...state
  };
}

export const mineUnflagged = (clickedX, clickedY, state) => {
  if (state.gameState === 'in-progress') {
    const clicked = state.board.find(t => t.id === `${clickedX}:${clickedY}`)
    clicked.isFlagged = false
  }

  return {
    ...state
  };
}

export const tilePressed = (clickedX, clickedY, state) => {
  if (state.gameState === 'in-progress' || state.gameState === 'initial') {
    const clicked = state.board.find(t => t.id === `${clickedX}:${clickedY}`)
    clicked.isPressed = true
  }

  return {
    ...state
  };
}

export const tileGroupPressed = (clickedX, clickedY, state) => {
  if (state.gameState === 'in-progress') {
    const clicked = state.board.find(t => t.id === `${clickedX}:${clickedY}`)
    const neighbours = state.board.filter(t => isNeighbour(t, clicked) && !t.isOpen && !t.isFlagged)
    clicked.isPressed = true
    for (let n of neighbours) {
      n.isPressed = true
    }
  }

  return {
    ...state
  };
}

export const releasePressed = (state) => {
  for (let t of state.board) {
    t.isPressed = false
  }
  return {
    ...state
  };
}
