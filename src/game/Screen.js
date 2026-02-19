export class Screen {
  /**@type {HTMLCanvasElement} */
  #canvas
  /**@type {CanvasRenderingContext2D} */
  #context

  /**
   * @param {HTMLCanvasElement} canvas
   * */
  constructor(canvas, options = { size: 30, block: 15, background: '#001010' }) {
    this.size = options.size
    this.block = options.block
    this.#canvas = canvas
    this.#canvas.style.background = options.background
    this.#canvas.height = this.size * this.block
    this.#canvas.width = this.size * this.block
    this.#context = this.#canvas.getContext('2d')
    this.#context.scale(this.block, this.block)
  }

  /**
   * @param {...{coords: {x: number, y: number}, color: string}} elements
   * */
  update(...elements) {
    this.clear()

    for (const { coords, color } of elements) {
      this.#context.fillStyle = color
      this.#context.fillRect(coords.x, coords.y, 1, 1)
    }
  }

  clear() {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
  }

  get background() {
    return this.#canvas.style.background
  }

  set background(background) {
    this.#canvas.style.background = background
  }
}
