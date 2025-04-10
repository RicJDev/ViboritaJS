export class Apple {
  constructor(color = '#970') {
    this.color = color
    this.gridValue = 2
    this.coords = { y: 0, x: 0 }

    this.isGeneretable = true
  }

  generate(x, y) {
    if (!this.isGeneretable) return

    this.isGeneretable = false

    this.coords.x = x
    this.coords.y = y
  }
}
