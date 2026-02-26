/**
 * @typedef {{coords: {x: number, y: number}, color: string}} Pixel
 * */
export class Screen {
  /**@type {HTMLCanvasElement} */
  #canvas
  /**@type {CanvasRenderingContext2D} */
  #context

  /**
   * @param {HTMLCanvasElement} canvas
   * */
  constructor(canvas, options = { side: 30, blockSize: 15, background: 'var(--primary)' }) {
    this.side = options.side
    this.blockSize = options.blockSize
    this.#canvas = canvas
    this.#canvas.style.background = options.background
    this.#canvas.height = this.side * this.blockSize
    this.#canvas.width = this.side * this.blockSize
    this.#context = this.#canvas.getContext('2d')
    this.#context.scale(this.blockSize, this.blockSize)
  }

  clear() {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
  }

  /** @param {...Pixel} pixels */
  draw(...pixels) {
    for (const { coords, color } of pixels) {
      this.#context.fillStyle = color
      this.#context.fillRect(coords.x, coords.y, 1, 1)
    }
  }

  /** @param {...Pixel} pixels */
  update(...pixels) {
    this.clear()
    this.draw(...pixels)
  }

  get background() {
    return this.#canvas.style.background
  }

  set background(background) {
    this.#canvas.style.background = background
  }
}
