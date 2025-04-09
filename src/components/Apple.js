export class Apple {
  gridValue = 2
  coords = { y: 0, x: 0 }
  isGeneretable = true

  constructor(color = '#970') {
    this.color = color
  }

  generate(x, y) {
    if (!this.isGeneretable) return

    this.isGeneretable = false

    this.coords.x = x
    this.coords.y = y
  }
}
