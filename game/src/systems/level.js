class Level {
  #board
  #snake
  #item

  constructor(board, snake, item) {
    this.#board = board
    this.#snake = snake
    this.#item = item
  }

  get grid() {
    const grid = [...this.#board]

    grid[this.#item.position.y][this.#item.position.x] = this.#item.gridValue

    this.#snake.body.forEach((segment) => {
      const { x, y } = segment

      if (grid[y]) grid[y][x] = this.#snake.gridValue
    })

    return grid
  }
}

export { Level }
