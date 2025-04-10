const defaultValues = {
  color: '#970',
  xLimit: 30,
  yLimit: 30,
}

export class Apple {
  #limits

  constructor({ color, xLimit, yLimit } = defaultValues) {
    this.gridValue = 2
    this.color = color
    this.coords = { y: 0, x: 0 }

    this.xLimit = xLimit
    this.yLimit = yLimit
    this.#limits = { x: xLimit, y: yLimit }

    this.isGeneretable = true
  }

  generate(callback) {
    if (!this.isGeneretable) return
    this.isGeneretable = false

    let x = Math.floor(Math.random() * this.xLimit)
    let y = Math.floor(Math.random() * this.yLimit)

    this.coords = callback(x, y, this.#limits) ?? { x, y }
  }
}
