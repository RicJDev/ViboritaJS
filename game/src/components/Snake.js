// Clase que representa a la serpiente que es controlada por el jugador.

import { MOVEMENTS } from './Movements.js'

class Snake {
  body = [{ x: 1, y: 1 }]
  size = 2

  color = '#2a8'
  gridValue = 1

  direction = 'right'

  movements = MOVEMENTS

  move() {
    this.body.length = this.size + 2
    const voidIndex = this.body.length - 1

    for (let i = voidIndex; i > 0; i--) this.body[i] = { ...this.body[i - 1] }

    const moveHead = this.movements[this.direction] || this.movements.right
    moveHead(this.body[0])
  }
}

export { Snake }
