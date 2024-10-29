class Snake {
  constructor(color) {
    this.color = color || '#4090bf'
  }

  body = [{ x: 1, y: 1 }]
  size = 2

  direction = 'right'

  setSegments() {
    this.body.length = this.size + 2

    for (let i = this.body.length; i > 0; i--) {
      this.body[i] = { ...this.body[i - 1] }
    }
  }
}

export { Snake }
