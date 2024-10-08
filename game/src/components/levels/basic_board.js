const BOARD = new Array(30)

for (let i = 0; i < BOARD.length; i++) BOARD[i] = new Array(30).fill(0)

const corner = [
  [8, 0, 0],
  [8, 0, 0],
  [8, 8, 8],
]

export { BOARD }
