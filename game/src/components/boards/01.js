import { Board } from './board.js'

const line = 15,
  _01 = new Board()

const { gridValue } = _01

function setLine(x, y) {
  for (let i = x; i < x + line; i++) {
    _01.addGridValue({ x: i, y: y }, gridValue)
  }
}

setLine(Math.floor(_01.width / 2) - Math.floor(line / 2), _01.height - 8)
setLine(Math.floor(_01.width / 2) - Math.floor(line / 2), 6)

export { _01 }
