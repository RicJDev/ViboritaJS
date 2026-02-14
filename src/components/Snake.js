const defaultValues = {
  color: '#4090bf',
  xLimit: 30,
  yLimit: 30,
}

export class Snake {
  #limits

  constructor({ color, xLimit, yLimit } = defaultValues) {
    this.color = color
    this.gridValue = 1
    this.coords = [{ y: 1, x: 1 }]

    this.head = this.coords[0]
    this.size = 2
    this.direction = 'right'

    this.xLimit = xLimit
    this.yLimit = yLimit
    this.#limits = { x: xLimit, y: yLimit }
  }

  #movements = {
    up: () => this.head.y--,
    down: () => this.head.y++,
    left: () => this.head.x--,
    right: () => this.head.x++,
    none: () => {},
  }

  move() {
    this.coords.length = this.size

    for (let i = this.coords.length; i > 0; i--) {
      this.coords[i] = { ...this.coords[i - 1] }
    }

    ;(this.#movements[this.direction] || this.#movements.none)()

    if (this.head.x >= this.xLimit) this.head.x = 0
    if (this.head.x < 0) this.head.x = this.xLimit - 1

    if (this.head.y >= this.yLimit) this.head.y = 0
    if (this.head.y < 0) this.head.y = this.yLimit - 1
  }

  get oppositeDirection() {
    const oppositesDirections = {
      up: 'down',
      down: 'up',
      left: 'right',
      right: 'left',
    }

    return oppositesDirections[this.direction]
  }
}
