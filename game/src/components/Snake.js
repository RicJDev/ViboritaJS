class Snake {
  gridValue = 9

  size = 2
  #body = [{ x: 1, y: 1 }]

  head = this.#body[0]

  isAlive = true

  //prettier-ignore
  constructor(color) { this.color = color || '#4090bf' }

  #direction = 'right'
  #movements = {
    up: () => this.head.y--,
    down: () => this.head.y++,
    left: () => this.head.x--,
    right: () => this.head.x++,
    none: () => {},
  }

  moveHead(callback = () => {}) {
    this.#body.length = this.size

    for (let i = this.#body.length; i > 0; i--) this.#body[i] = { ...this.#body[i - 1] }

    this.#movements[this.#direction]()

    callback()
  }

  set direction(direction) {
    const Directions = Object.keys(this.#movements)

    if (Directions.includes(direction)) this.#direction = direction
  }

  //prettier-ignore
  get body() { return this.#body }
}

export { Snake }
