import { basicBoard, gridValue } from './_basicBoard.js'

const _01 = [...basicBoard]

const line = new Array(15).fill(gridValue)

const anchor = {
  x: Math.floor(_01[0].length / 2) - Math.floor(line.length / 2),
  y: _01.length - 8,
}

for (let i = anchor.x; i < anchor.x + line.length; i++) _01[anchor.y][i] = gridValue

anchor.y = 6

for (let i = anchor.x; i < anchor.x + line.length; i++) _01[anchor.y][i] = gridValue

export { _01 }
