
export const generateEmptyBoard = (width, height) => {
  const board = [];
  // create a board for the current game size
  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      board.push({
        id: `${x}:${y}`,
        x,
        y,
        isOpen: false,
        isBomb: false,
        isFlagged: false,
        isPressed: false,
        adjacentBombCount: 0
      })
    }
  }
  return board
}

export const generateBoard = (clickedX, clickedY, state) => {
  if (state.gameState !== 'initial') {
    return
  }
  let minesPlaced = 0;
  while (minesPlaced < state.mineCount) {
    for (let x = 0; x < state.boardHeight; x++) {
      for (let y = 0; y < state.boardWidth; y++) {
        // don't place a mine where the user clicked
        if (x === clickedX && y === clickedY) {
          continue;
        } else {
          const rand = Math.random()
          const tile = state.board.find(t => t.id === `${x}:${y}`)
          if (rand > 0.992 && minesPlaced < state.mineCount && !tile.isBomb) {
            tile.isBomb = true
            console.log(`planted bomb at ${tile.x}:${tile.y}`);
            minesPlaced++
          }
        }
      }
    }
    console.debug(`finished cycle; planted ${minesPlaced} mines; total mines left to plant: ${state.mineCount - minesPlaced}`)
  }
  // now that we've placed all the mines, generate the adjacent mine count for all tiles
  for (let t of state.board) {
    const count = calculateAdjacentMineCount(t.x, t.y, state)
    t.adjacentBombCount = count
  }
  state.gameState = 'in-progress'
}

export const openTile = (tile, state) => {
  console.log(`opening ${tile.x}:${tile.y} isBomb: ${tile.isBomb}`)
  tile.isOpen = true
  // if we have zero adjacent bombs open our neighbours.
  if (tile.adjacentBombCount === 0 && !tile.isBomb) {
    const neighbours = state.board.filter(t => isNeighbour(t, tile) && !t.isBomb && !t.isOpen && !t.isFlagged)
    for (let n of neighbours) {
      openTile(n, state)
    }
  }
}

export const isNeighbour = (t, tile) => {
  // above and below
  if (t.x === tile.x && (t.y === tile.y - 1 || t.y === tile.y + 1)) {
    return true
  }
  // to the left and the right
  else if (t.y === tile.y && (t.x === tile.x - 1 || t.x === tile.x + 1)) {
    return true
  }
  // left 1: above and below
  if (t.x === tile.x - 1 && (t.y === tile.y - 1 || t.y === tile.y + 1)) {
    return true
  }
  // right 1: above and below
  if (t.x === tile.x + 1 && (t.y === tile.y - 1 || t.y === tile.y + 1)) {
    return true
  }
  return false
}

export const calculateAdjacentMineCount = (x, y, state) => {
  const tile = state.board.find(t => t.id === `${x}:${y}`);
  const neighbours = state.board.filter(t => isNeighbour(t, tile))
  const adjacentBombs = neighbours.filter(t => t.isBomb)
  return adjacentBombs.length
}

export const checkGameStatus = (state) => {
  let tilesToReveal = 0;
  for(let i = 0; i < state.board.length; i++) {
    const t = state.board[i];
    if (t.isBomb && t.isOpen) {
      return 'lost'
    } else if (!t.isOpen) {
      tilesToReveal++;
    }
  }
  if (tilesToReveal === state.mineCount) {
    return 'won';
  }
  return state.gameState
}
