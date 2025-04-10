export class Snake {
  constructor(color = '#4090bf') {
    this.color = color
    this.gridValue = 1
    this.coords = [{ y: 1, x: 1 }]

    this.head = this.coords[0]
    this.size = 2
    this.direction = 'right'
  }

  #movements = {
    up: () => this.head.y--,
    down: () => this.head.y++,
    left: () => this.head.x--,
    right: () => this.head.x++,
    none: () => {},
  }

  move(xLimit = 30, yLimit = xLimit) {
    this.coords.length = this.size

    for (let i = this.coords.length; i > 0; i--) {
      this.coords[i] = { ...this.coords[i - 1] }
    }

    ;(this.#movements[this.direction] || this.#movements.none)()

    if (this.head.x >= xLimit) this.head.x = 0
    if (this.head.x < 0) this.head.x = xLimit - 1

    if (this.head.y >= yLimit) this.head.y = 0
    if (this.head.y < 0) this.head.y = yLimit - 1
  }

  get oppositeDirection() {
    const oppositesDirections = { up: 'down', down: 'up', left: 'right', right: 'left' }
    return oppositesDirections[this.direction]
  }
}
