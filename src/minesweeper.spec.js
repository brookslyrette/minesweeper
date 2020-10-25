import { generateEmptyBoard, generateBoard, isNeighbour, checkGameStatus } from './minesweeper'

it('generates an empty board', () => {
  const board = generateEmptyBoard(10);
  expect(board.length).toEqual(100)
  for (let tile of board) {
    expect(tile.isBomb).toEqual(false)
    expect(tile.isOpen).toEqual(false)
    expect(tile.isFlagged).toEqual(false)
    expect(tile.adjacentBombCount).toEqual(0)
  }
});

it('plants the correct number of mines', () => {
  const gameState = {
    gameState: 'initial',
    boardSize: 10,
    mineCount: 7,
    board: generateEmptyBoard(10)
  }

  generateBoard(0, 0, gameState);

  expect(gameState.board.length).toEqual(100)
  for (let tile of gameState.board) {
    expect(tile.isOpen).toEqual(false)
    expect(tile.isFlagged).toEqual(false)
  }
  const plantedBombs = gameState.board.filter(t => t.isBomb)
  expect(plantedBombs.length).toEqual(7)
});

it('in-progress games are not over written', () => {
  const gameState = {
    gameState: 'in-progress',
    boardSize: 10,
    mineCount: 7,
    board: generateEmptyBoard(10)
  }

  generateBoard(0, 0, gameState);

  const plantedBombs = gameState.board.filter(t => t.isBomb)
  expect(plantedBombs.length).toEqual(0)
});

it('finds the correct neighbour tiles', () => {
  expect(isNeighbour({ x: 0, y: 0 }, { x: 0, y: 1 })).toEqual(true)
  expect(isNeighbour({ x: 0, y: 0 }, { x: 1, y: 1 })).toEqual(true)
  expect(isNeighbour({ x: 0, y: 0 }, { x: 1, y: 0 })).toEqual(true)
  expect(isNeighbour({ x: 0, y: 0 }, { x: 2, y: 1 })).toEqual(false)
  expect(isNeighbour({ x: 0, y: 0 }, { x: 2, y: 1 })).toEqual(false)
  expect(isNeighbour({ x: 6, y: 6 }, { x: 6, y: 6 })).toEqual(false)
  expect(isNeighbour({ x: 6, y: 6 }, { x: 6, y: 5 })).toEqual(true)
  expect(isNeighbour({ x: 6, y: 6 }, { x: 6, y: 7 })).toEqual(true)
  expect(isNeighbour({ x: 6, y: 6 }, { x: 5, y: 6 })).toEqual(true)
  expect(isNeighbour({ x: 6, y: 6 }, { x: 7, y: 6 })).toEqual(true)
  expect(isNeighbour({ x: 6, y: 6 }, { x: 7, y: 5 })).toEqual(true)
  expect(isNeighbour({ x: 6, y: 6 }, { x: 5, y: 5 })).toEqual(true)
});

it('Opening a bomb causes a loss', () => {
  const gameState = {
    gameState: 'in-progress',
    boardSize: 10,
    mineCount: 7,
    board: [{
      isBomb: true,
      isOpen: true
    }]
  }

  generateBoard(0, 0, gameState);
  expect(checkGameStatus(gameState)).toEqual('lost')
});

it('Opening all non bomb tiles is a win', () => {
  const gameState = {
    gameState: 'in-progress',
    boardSize: 10,
    mineCount: 1,
    board: [{
      isBomb: true,
      isOpen: false
    }, {
      isBomb: false,
      isOpen: true
    }]
  }

  generateBoard(0, 0, gameState);
  expect(checkGameStatus(gameState)).toEqual('won')
});
