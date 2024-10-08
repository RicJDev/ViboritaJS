function defaultCallback(x, y) {
  x = Math.floor(Math.random() * 30)
  y = Math.floor(Math.random() * 30)

  return { x, y }
}

// Un item es un alimento que provoca que la serpiente crezca.

class Item {
  position = { x: 10, y: 20 }
  isGeneretable = true

  color = '#970'
  gridValue = 6

  generate(callback = defaultCallback) {
    if (this.isGeneretable) {
      this.isGeneretable = false

      const { x, y } = callback(this.position.x, this.position.y) || this.position

      this.position.x = x
      this.position.y = y
    }
  }
}

export { Item }
