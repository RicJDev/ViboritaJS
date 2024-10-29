import { basicBoard } from './_basicBoard.js'
import { gridValue } from './_basicBoard.js'

const LEVEL_01 = [...basicBoard]

const line = new Array(15).fill(gridValue)

const anchor = {
  x: Math.floor(LEVEL_01[0].length / 2) - Math.floor(line.length / 2),
  y: LEVEL_01.length - 8,
}

for (let i = anchor.x; i < anchor.x + line.length; i++) LEVEL_01[anchor.y][i] = gridValue

anchor.y = 6

for (let i = anchor.x; i < anchor.x + line.length; i++) LEVEL_01[anchor.y][i] = gridValue

export { LEVEL_01 }
