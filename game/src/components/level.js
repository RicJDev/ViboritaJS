class Level {
  #board
  #snake
  #item

  constructor(board, snake, item) {
    this.#board = board
    this.#snake = snake
    this.#item = item
  }

  #addGridValue(grid, { x, y }, gridValue) {
    if (x >= 0 && x < this.#board.width && y >= 0 && y < this.#board.height) {
      grid[y * this.#board.width + x] = gridValue
    }
  }

  #convertTo2d(grid) {
    const convertedGrid = []

    for (let i = 0; i < this.#board.length; i += this.#board.width) {
      convertedGrid.push(grid.slice(i, i + this.#board.width))
    }

    return convertedGrid
  }

  get colors() {
    const colors = {
      0: '#000b10',
      1: '#d04090',
      [this.#snake.gridValue]: this.#snake.color,
      [this.#item.gridValue]: this.#item.color,
    }

    return colors
  }

  get grid() {
    const copy = [...this.#board.grid]

    this.#addGridValue(copy, this.#item.position, this.#item.gridValue)

    this.#snake.body.forEach((segment) => {
      this.#addGridValue(copy, segment, this.#snake.gridValue)
    })

    return this.#convertTo2d(copy)
  }
}

export { Level }
