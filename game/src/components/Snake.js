class Snake {
  gridValue = 9

  size = 2
  #body = [{ x: 1, y: 1 }]

  head = this.#body[0]

  isAlive = true

  constructor(color) { this.color = color || '#4090bf' }

  #direction = 'right'
  #movements = {
    up: () => this.head.y--,
    down: () => this.head.y++,
    left: () => this.head.x--,
    right: () => this.head.x++,
    none: () => {},
  }

  move(xLimit = 30, yLimit = 30) {
    this.#body.length = this.size

    for (let i = this.#body.length; i > 0; i--) {
      this.#body[i] = { ...this.#body[i - 1] }
    }

    this.#movements[this.#direction]()

    if (this.head.x >= xLimit) this.head.x = 0
    if (this.head.x < 0) this.head.x = xLimit - 1

    if (this.head.y >= yLimit) this.head.y = 0
    if (this.head.y < 0) this.head.y = yLimit - 1
  }

  set direction(direction) {
    const Directions = Object.keys(this.#movements)

    if (Directions.includes(direction)) this.#direction = direction
  }

  get direction() { return this.#direction }

  get body() { return this.#body }
}

export { Snake }
