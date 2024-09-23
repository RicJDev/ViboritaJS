// Board's dimensions.

const BOARD_HEIGHT = 30
const BOARD_WIDTH = 30
const BLOCK_SIZE = 15

// Board generation.

const BOARD = new Array(BOARD_HEIGHT)

for (let i = 0; i < BOARD.length; i++) {
  BOARD[i] = new Array(BOARD_WIDTH).fill(0)
}

// Html elements.

/**@type {HTMLHeadingElement} */
const pointsRecord = document.querySelector('.record-points')

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.height = BOARD_HEIGHT * BLOCK_SIZE
canvas.width = BOARD_WIDTH * BLOCK_SIZE

context.scale(BLOCK_SIZE, BLOCK_SIZE)

// Snake object.

/**@typedef {'up' | 'down' | 'right' | 'left'} direction */

const snake = {
  body: [{ x: 1, y: 1 }],

  /**@type {direction} */
  direction: 'right',

  tailSize: 2,
}

// Teleports the snake's segment if goes out the limits.

function teleportSegment(index) {
  const segment = snake.body[index]

  if (segment.y < 0) segment.y = BOARD.length - 1
  if (segment.y >= BOARD.length) segment.y = 0

  if (segment.x < 0) segment.x = BOARD[0].length - 1
  if (segment.x >= BOARD[0].length) segment.x = 0
}

// Moves the snake according to its direction.

const SEGMENT_MOVEMENTS = {
  up: (index) => snake.body[index].y--,
  down: (index) => snake.body[index].y++,
  left: (index) => snake.body[index].x--,
  right: (index) => snake.body[index].x++,
}

function moveSnake() {
  const moveSegment = SEGMENT_MOVEMENTS[snake.direction]

  snake.body.length = snake.tailSize + 2

  const voidIndex = snake.body.length - 1

  for (let i = voidIndex; i > 0; i--) {
    snake.body[i] = { ...snake.body[i - 1] }

    const { x, y } = snake.body[i]

    if ((x !== undefined) & (y !== undefined)) BOARD[y][x] = 2
    if (i > 12) BOARD[y][x] = 3
    if (i > 16) BOARD[y][x] = 4
  }

  BOARD[snake.body[voidIndex].y][snake.body[voidIndex].x] = 0

  moveSegment(0)
  teleportSegment(0)

  BOARD[snake.body[0].y][snake.body[0].x] = 1
}

// Random apple's generation system.

let points = 0

const apple = {
  position: { y: 20, x: 10 },
  exist: false,
}

function generateApple() {
  while (BOARD[apple.position.y][apple.position.x] !== 0) {
    apple.position.x = Math.floor(Math.random() * BOARD.length)
    apple.position.y = Math.floor(Math.random() * BOARD[0].length)
  }

  BOARD[apple.position.y][apple.position.x] = 10
}

function checkApple() {
  if (!apple.exist) {
    generateApple()
    apple.exist = true
  }

  if (BOARD[apple.position.y][apple.position.x] !== 10) {
    apple.exist = false
    points++
    snake.tailSize++
  }
}

// Adding controls (unable to move the opposite direction).

const EVENT_MOVEMENTS = {
  UP: ['ArrowUp', 'w'],
  DOWN: ['ArrowDown', 's'],
  LEFT: ['ArrowLeft', 'a'],
  RIGHT: ['ArrowRight', 'd'],
}

function controls(event) {
  if (EVENT_MOVEMENTS.UP.includes(event.key)) {
    if (snake.direction !== 'down') snake.direction = 'up'
  }

  if (EVENT_MOVEMENTS.DOWN.includes(event.key)) {
    if (snake.direction !== 'up') snake.direction = 'down'
  }

  if (EVENT_MOVEMENTS.LEFT.includes(event.key)) {
    if (snake.direction !== 'right') snake.direction = 'left'
  }

  if (EVENT_MOVEMENTS.RIGHT.includes(event.key)) {
    if (snake.direction !== 'left') snake.direction = 'right'
  }
}

document.addEventListener('keydown', controls)

// Drawing elements.

function draw() {
  moveSnake()

  checkApple()

  const colors = {
    0: '#fff',
    1: '#33d',
    2: '#c3d1',
    3: '#d392',
    4: '#3d91',
    10: '#970',
  }

  BOARD.forEach((row, y) => {
    row.forEach((value, x) => {
      context.fillStyle = colors[value] || colors[0]

      context.fillRect(x, y, 1, 1)
    })
  })

  pointsRecord.innerHTML = `Points: ${points}`
}

setInterval(draw, 1000 / 15)
