class Snake {
  _body = [{ x: 1, y: 1 }]
  size = 2

  direction = 'right'

  gridValue = 8

  constructor(color) {
    this.color = color || '#4090bf'
  }

  get body() {
    this._body.length = this.size + 2
  
    const voidIndex = this._body.length

    for (let i = voidIndex; i > 0; i--) this._body[i] = { ...this._body[i - 1] }

    return this._body
  }
}

export { Snake }
