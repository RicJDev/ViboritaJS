class Snake {
  body = [{ x: 1, y: 1 }]
  direction = 'right'
  size = 2
  speed = 1

  movements = {
    up: () => this.body[0].y--,
    down: () => this.body[0].y++,
    left: () => this.body[0].x--,
    right: () => this.body[0].x++,
  }

  move() {
    this.body.length = this.size + 2
    const voidIndex = this.body.length - 1

    for (let index = voidIndex; index > 0; index--) this.body[index] = { ...this.body[index - 1] }

    const moveHead = this.movements[this.direction]
    moveHead()
  }

  eat(apple) {
    this.size++
    apple.isGeneretable = false
  }
}

export { Snake }
