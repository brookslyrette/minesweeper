const Tile = ({ item, dispatch, isGameOver }) => {

  const handleRightClick = (event) => {
    event.preventDefault()
    if (item.isOpen) {
      return;
    }

    if (!item.isFlagged) {
      dispatch({ type: 'flag-tile', x: item.x, y: item.y })
    } else {
      dispatch({ type: 'unflag-tile', x: item.x, y: item.y })
    }
  }

  const handleClick = (event) => {
    // if you shift click we click a group of tiles.
    if (event.shiftKey) {
      dispatch({ type: 'tile-group-click', x: item.x, y: item.y })
    } else {
      if (item.isOpen || item.isFlagged) {
        return;
      }
      dispatch({ type: 'tile-click', x: item.x, y: item.y })
    }
  }

  const getTileContent = (item) => {
    if (item.isBomb && item.isOpen) {
      return '💥'
    }
    else if (isGameOver && item.isBomb && !item.isOpen && !item.isFlagged) {
      return '💣';
    } else if (item.isFlagged) {
      return '⛳';
    } else if (item.isOpen && item.adjacentBombCount > 0) {
      return item.adjacentBombCount;
    }
  }

  return (
    <div
      className={`tile ${isGameOver ? 'gameOver' : ''} mine-count${ item.isBomb ? '' : item.adjacentBombCount} ${item.isOpen ? '' : 'hiddenTile'} ${item.isFlagged ? 'flaggedTile' : ''}`}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      {getTileContent(item)}
    </div>
  )
}

export default Tile
