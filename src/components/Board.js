import Tile from './Tile'

const Board = ({ game, dispatch }) => {
  const items = []
  const isGameOver = game.gameState === 'won' || game.gameState === 'lost'

  for (let i = 0; i < game.boardHeight; i++) {
    const rowItems = game.board.filter(t => t.x === i);
    items.push(
      <div className="row" key={i}>
        {rowItems.map(t => (<Tile key={t.id} item={t} isGameOver={isGameOver} dispatch={dispatch} />) )}
      </div>
    )
  }

  return (
    <>
      {items}
    </>
  )
}

export default Board
