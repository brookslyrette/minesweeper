const Tile = ({ item, dispatch }) => {

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

  return (
    <div
      className={`tile mine-count${item.adjacentBombCount} ${item.isOpen ? '' : 'hiddenTile'} ${item.isFlagged ? 'flaggedTile' : ''}`}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    >
      { item.isFlagged ? '⛳' : item.isBomb ? (item.isOpen ? '💥' : '💣') : item.adjacentBombCount}
    </div>
  )
}

export default Tile
