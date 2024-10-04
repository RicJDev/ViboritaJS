class Snake {
  body = [{ x: 1, y: 1 }]
  size = 2

  color = ''
  gridValue = 1

  movements = {
    up: () => snake.body[0].y--,
    down: () => snake.body[0].y++,
    left: () => snake.body[0].x--,
    right: () => snake.body[0].x++,
    none: () => {
      snake.body[0] = snake.body[0]
    },
  }

  direction = 'right'

  move() {
    const moveHead = this.movements[this.direction]
    this.body.length = this.size + 2

    const voidIndex = this.body.length - 1

    for (let i = voidIndex; i > 0; i--) {
      this.body[i] = { ...this.body[i - 1] }
    }

    moveHead()
  }
}

export { Snake }
