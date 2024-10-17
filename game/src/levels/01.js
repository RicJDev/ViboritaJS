const LEVEL_1 = new Array(30)
for (let i = 0; i < LEVEL_1.length; i++) LEVEL_1[i] = new Array(30).fill(0)

const gridValue = 10
const line = new Array(15).fill(gridValue)

const anchor = {
  x: Math.floor(LEVEL_1[0].length / 2) - Math.floor(line.length / 2),
  y: LEVEL_1.length - 8,
}

for (let i = anchor.x; i < anchor.x + line.length; i++) LEVEL_1[anchor.y][i] = gridValue

anchor.y = 6

for (let i = anchor.x; i < anchor.x + line.length; i++) LEVEL_1[anchor.y][i] = gridValue

export { LEVEL_1 }
