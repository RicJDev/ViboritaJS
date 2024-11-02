class Level {
  #board
  #snake
  #item

  constructor(board, snake, item) {
    this.#board = board
    this.#snake = snake
    this.#item = item
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
    const grid = JSON.parse(JSON.stringify(this.#board))

    // const grid = [...this.#board]

    grid[this.#item.position.y][this.#item.position.x] = this.#item.gridValue

    this.#snake.body.forEach((segment) => {
      const { x, y } = segment

      if (grid[y]) grid[y][x] = this.#snake.gridValue
    })

    return grid
  }
}

export { Level }
