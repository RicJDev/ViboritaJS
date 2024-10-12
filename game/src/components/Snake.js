// Clase que representa a la serpiente que es controlada por el jugador.

function defaultCallback(head) {
  const { x, y } = head

  if (x > 30) head.x = 0
  if (x <= 0) head.x = 30

  if (y > 30) head.y = 0
  if (y <= 0) head.y = 30
}

class Snake {
  body = [{ x: 1, y: 1 }]
  size = 2

  color = '#2a8'
  gridValue = 1

  /**@typedef {'up' | 'down' | 'left' | 'rigth'} Direction */

  /**@type {Direction} */
  direction = 'rigth'

  #movements = {
    up: () => this.body[0].y--,
    down: () => this.body[0].y++,
    left: () => this.body[0].x--,
    right: () => this.body[0].x++,
    none: () => {},
  }

  /**
   * Funcion para mover a la Serpiente. Se le puede pasar un callback para determinar las condiciones en las que se mueve.
   *
   * Por defecto tiene este callback:
   * ```js
   * (head) => {
   *  const { x, y } = head
   *
   *  if (x > 30) head.x = 0
   *  if (x <= 0) head.x = 30
   *
   *  if (y > 30) head.y = 0
   *  if (y <= 0) head.y = 30
   * }
   * ```
   *
   * @param {({x: number, y: number}: object) => void} callback
   */

  move(callback = defaultCallback) {
    this.body.length = this.size + 2

    for (let i = this.body.length - 1; i > 0; i--) this.body[i] = { ...this.body[i - 1] }

    const head = this.body[0]

    const move = this.#movements[this.direction] || this.#movements.right

    move(head)
    callback(head)
  }
}

export { Snake }
