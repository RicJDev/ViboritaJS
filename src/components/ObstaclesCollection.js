export class ObstaclesCollection {
  gridValue = 0
  coords = []

  constructor(color = '#d04090') {
    this.color = color
  }

  addPoint({ x, y }) {
    this.coords.push({ x, y })

    return this
  }

  addRow({ x, y, size = 1 }) {
    for (let i = x; i < x + size; i++) {
      this.addPoint({ x: i, y: y })
    }

    return this
  }

  addColumn({ x, y, size = 1 }) {
    for (let i = y; i < y + size; i++) {
      this.addPoint({ x: x, y: i })
    }

    return this
  }
}
