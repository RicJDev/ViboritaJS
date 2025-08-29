export class Screen {
  #ctx
  #canvas

  /**
   * @param {HTMLCanvasElement} canvas
   * */
  constructor(canvas, side = 30, blockSize = 20) {
    this.width = side
    this.blockSize = blockSize

    this.#canvas = canvas
    this.#canvas.width = side * blockSize
    this.#canvas.height = side * blockSize

    this.#ctx = canvas.getContext('2d')
    this.#ctx.scale(blockSize, blockSize)
  }

  update(...pixels) {
    this.clear()

    for (const [color, x, y] of pixels) {
      this.#ctx.fillStyle = color

      this.#ctx.fillRect(x, y, 1, 1)
    }
  }

  clear() {
    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
  }

  get background() {
    return this.#canvas.style.background
  }

  set background(background) {
    this.#canvas.style.background = background
  }
}
