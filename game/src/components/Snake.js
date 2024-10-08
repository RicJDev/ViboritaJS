class Snake {
  body = [{ x: 1, y: 1 }]
  size = 2

  color = '#2a8'
  gridValue = 1

  direction = 'right'
  movements = {
    up: () => this.body[0].y--,
    down: () => this.body[0].y++,
    left: () => this.body[0].x--,
    right: () => this.body[0].x++,
    none: () => {},
  }

  move() {
    this.body.length = this.size + 2
    const voidIndex = this.body.length - 1

    for (let i = voidIndex; i > 0; i--) this.body[i] = { ...this.body[i - 1] }

    const moveHead = this.movements[this.direction] || this.movements.right
    moveHead()
  }
}

export { Snake }
