const LEVEL = 1

const levelBoard = new Array(30)
for (let i = 0; i < levelBoard.length; i++) levelBoard[i] = new Array(30).fill(0)

const gridValue = 10
const line = new Array(8).fill(gridValue)

const obstacleAnchor = {
  x: Math.floor(levelBoard[0].length / 2) - line.length,
  y: Math.floor(levelBoard.length / 2),
}

for (let i = obstacleAnchor.x; i < obstacleAnchor.x + line.length; i++) {
  levelBoard[obstacleAnchor.y][i] = gridValue
}

export { levelBoard }
