class Item {
  position = { x: 10, y: 20 }
  isGeneretable = true

  gridValue = 7

  constructor(color) {
    this.color = color || '#970'
  }

  generate(x, y) {
    if (this.isGeneretable) {
      this.isGeneretable = false

      this.position.x = x
      this.position.y = y
    }
  }
}

export { Item }
