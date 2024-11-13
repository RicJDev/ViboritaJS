class Render {
  #blockSize
  #canvas
  #context

  constructor(blockSize) {
    this.#blockSize = blockSize || 15

    this.#canvas = document.querySelector('canvas')

    this.#canvas.height = 30 * this.#blockSize
    this.#canvas.width = 30 * this.#blockSize

    this.#context = this.#canvas.getContext('2d')

    this.#context.scale(this.#blockSize, this.#blockSize)
  }

  draw(level) {
    const { grid, colors } = level

    grid.forEach((row, y) => {
      row.forEach((value, x) => {
        this.#context.fillStyle = colors[value] || colors[0]

        this.#context.fillRect(x, y, 1, 1)
      })
    })
  }
}

export { Render }
