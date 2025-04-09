export class Screen {
  #canvas
  #context

  constructor({ size = 30, block = 20, canvas = document.createElement('canvas') }) {
    this.size = size
    this.block = block

    this.#canvas = canvas
    this.#canvas.height = size * block
    this.#canvas.width = size * block
    this.#context = this.#canvas.getContext('2d')
    this.#context.scale(block, block)
  }

  update(...elements) {
    for (const element of elements) {
      this.#context.fillStyle = element.color

      const { coords } = element

      Array.isArray(coords)
        ? coords.forEach(({ x, y }) => this.#context.fillRect(x, y, 1, 1))
        : this.#context.fillRect(coords.x, coords.y, 1, 1)
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
