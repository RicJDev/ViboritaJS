/*------------------------------- COMPONENTES DEL JUEGO -------------------------------*/
//-------------------------------------------------------------------------------------//

class Snake {
  value = 9

  coords = [{ y: 1, x: 1 }]
  head = this.coords[0]

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

  move(limitX = 30, limitY = 30) {
    this.coords.length = this.size

    for (let i = this.coords.length; i > 0; i--) {
      this.coords[i] = { ...this.coords[i - 1] }
    }

    ;(this.#movements[this.direction] || this.#movements.none)()

    if (this.head.x >= limitX) this.head.x = 0
    if (this.head.x < 0) this.head.x = limitX - 1

    if (this.head.y >= limitY) this.head.y = 0
    if (this.head.y < 0) this.head.y = limitY - 1
  }
}

//-------------------------------------------------------------------------------------//

class ObstaclesCollection {
  value = 1

  coords = []

  constructor(color = '#d04090') {
    this.color = color
  }

  add(coord) {
    this.coords.push(coord)
  }
}

//-------------------------------------------------------------------------------------//

class Apple {
  value = 8

  coords = { y: 5, x: 8 }

  isGeneretable = false

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
