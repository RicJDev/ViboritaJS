class Item {
  constructor(color) {
    this.color = color || '#970'
  }

  position = { x: 10, y: 20 }
  isGeneretable = true

  generate(x, y) {
    if (this.isGeneretable) {
      this.isGeneretable = false

      this.position.x = x
      this.position.y = y
    }
  }
}

export { Item }
