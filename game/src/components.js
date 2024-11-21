/*------------------------------- COMPONENTES DEL JUEGO -------------------------------*/
//-------------------------------------------------------------------------------------//

class Snake {
  coords = [{ y: 1, x: 1 }]
  head = this.coords[0]

  isAlive = true

  size = 2
  direction = 'right'

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
}

//-------------------------------------------------------------------------------------//

class ObstaclesCollection {
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
