class Item {
  gridValue = 8

  position = { x: 8, y: 8 }
  isGeneretable = true

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
