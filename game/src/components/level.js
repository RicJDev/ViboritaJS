class Level {
  #board
  #snake
  #item

  constructor(board, snake, item) {
    this.#board = board
    this.#snake = snake
    this.#item = item
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
      [this.#item.gridValue]: this.#item.color,
      [this.#snake.gridValue]: this.#snake.color,
    }

    return colors
  }

  get grid() {
    const copy = [...this.#board.grid]

    const addGridValue = ({ x, y }, gridValue) => {
      if (x >= 0 && x < this.#board.width && y >= 0 && y < this.#board.height) {
        copy[y * this.#board.width + x] = gridValue
      }
    }

    this.#snake.body.forEach((segment) => {
      addGridValue(segment, this.#snake.gridValue)
    })

    addGridValue(this.#item.position, this.#item.gridValue)

    return this.#convertTo2d(copy)
  }
}

export { Level }
