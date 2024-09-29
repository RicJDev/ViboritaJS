function generateBoard(height, width) {
  const board = new Array(height)

  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(width).fill(0)
  }

  return board
}

export { generateBoard }
