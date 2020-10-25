import Tile from './Tile'

const Board = ({ game, dispatch }) => {
  const items = []

  for(let i = 0; i < game.boardSize; i++) {
    const rowItems = game.board.filter(t => t.x === i);
    items.push(
      <div className="row" key={i}>
        {rowItems.map(t => (<Tile key={t.id} item={t} dispatch={dispatch} />) )}
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
