const level1_Board = new Array(30)
for (let i = 0; i < level1_Board.length; i++) level1_Board[i] = new Array(30).fill(0)

const gridValue = 10
const line = new Array(15).fill(gridValue)

const obstacleAnchor1 = {
  x: Math.floor(level1_Board[0].length / 2) - Math.floor(line.length / 2),
  y: level1_Board.length - 8,
}

const obstacleAnchor2 = {
  x: Math.floor(level1_Board[0].length / 2) - Math.floor(line.length / 2),
  y: 6,
}

for (let i = obstacleAnchor2.x; i < obstacleAnchor2.x + line.length; i++) {
  level1_Board[obstacleAnchor2.y][i] = gridValue
}

for (let i = obstacleAnchor1.x; i < obstacleAnchor1.x + line.length; i++) {
  level1_Board[obstacleAnchor1.y][i] = gridValue
}

export { level1_Board }
