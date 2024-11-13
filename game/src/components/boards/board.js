class Board {
  #grid

  constructor(height, width) {
    this.height = height || 30
    this.width = width || this.height

    this.#grid = new Array(this.height * this.width).fill(0)
  }

  addGridValue({ x, y }, gridValue) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.#grid[y * this.width + x] = gridValue
    }
  }

  get grid() { return this.#grid }

  get length() { return this.#grid.length }
}

export { Board }
