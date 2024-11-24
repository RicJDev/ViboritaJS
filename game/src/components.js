/*------------------------------- COMPONENTES DEL JUEGO -------------------------------*/
//-------------------------------------------------------------------------------------//

class Snake {
  coords = [{ y: 1, x: 1 }]
  head = this.coords[0]

  size = 2
  direction = 'right'

  targetDirection = null

  constructor(color = '#4090bf') {
    this.color = color
  }

  #movements = {
    up: () => this.head.y--,
    down: () => this.head.y++,
    left: () => this.head.x--,
    right: () => this.head.x++,
    none: () => {},
  }

  move(xLimit = 30, yLimit = 30) {
    if (this.targetDirection && this.targetDirection !== this.oppositeDirection) {
      this.direction = this.targetDirection
    }
    this.coords.length = this.size

    for (let i = this.coords.length; i > 0; i--) {
      this.coords[i] = { ...this.coords[i - 1] }
    }

    ;(this.#movements[this.direction] || this.#movements.none)()

    if (this.head.x >= xLimit) this.head.x = 0
    if (this.head.x < 0) this.head.x = xLimit - 1

    if (this.head.y >= yLimit) this.head.y = 0
    if (this.head.y < 0) this.head.y = yLimit - 1

    this.targetDirection = null
  }

  get oppositeDirection() {
    const oppositesDirections = { up: 'down', down: 'up', left: 'right', right: 'left' }

    return oppositesDirections[this.direction]
  }
}

//-------------------------------------------------------------------------------------//

class ObstaclesCollection {
  /**@type { Array<{ x: number, y: number }> } */
  coords = []

  constructor(color = '#d04090') {
    this.color = color
  }

  add(x, y) {
    this.coords.push({ x: x, y: y })
  }
}

//-------------------------------------------------------------------------------------//

class Apple {
  coords = { y: 0, x: 0 }

  isGeneretable = true

  constructor(color) {
    this.color = color || '#970'
  }

  generate(x, y) {
    if (!this.isGeneretable) return

    this.isGeneretable = false

    this.coords.x = x
    this.coords.y = y
  }
}

//-------------------------------------------------------------------------------------//

export { Snake, ObstaclesCollection, Apple }
