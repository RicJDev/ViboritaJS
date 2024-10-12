/* Creando matriz del tablero */

// Dimensiones del tablero.

const BOARD_HEIGHT = 30
const BOARD_WIDTH = 30
const BLOCK_SIZE = 12

// Generación del tablero.

const BOARD = new Array(BOARD_HEIGHT)
for (let i = 0; i < BOARD.length; i++) BOARD[i] = new Array(BOARD_WIDTH).fill(0)

/* Elementos HTML */

// Canvas y su contexto

const canvas = document.querySelector('canvas')

canvas.height = BOARD_HEIGHT * BLOCK_SIZE
canvas.width = BOARD_WIDTH * BLOCK_SIZE

const context = canvas.getContext('2d')
context.scale(BLOCK_SIZE, BLOCK_SIZE)

// Puntaje y nivel actual

let points = 0
let level = 1

const recordPoints = document.querySelector('.record-points')
const currentLevel = document.querySelector('.current-level')

currentLevel.innerHTML = `Nivel: ${level}`

/* La serpiente */

const snake = {
  body: [{ x: 1, y: 1 }],
  tailSize: 2,

  direction: 'right',

  color: '#60a0bf',
  gridValue: 1,
}

// Función para teletransportar a la serpiente si se sale de los límites del tablero.

function teleportSnakeHead() {
  const segment = snake.body[0]

  if (segment.y < 0) segment.y = BOARD.length - 1
  if (segment.y >= BOARD.length) segment.y = 0

  if (segment.x < 0) segment.x = BOARD[0].length - 1
  if (segment.x >= BOARD[0].length) segment.x = 0
}

// Sistema de movimiento. Cambia según la dirección de la serpiente.

const SEGMENT_MOVEMENTS = {
  up: () => snake.body[0].y--,
  down: () => snake.body[0].y++,
  left: () => snake.body[0].x--,
  right: () => snake.body[0].x++,
  none: () => {},
}

function moveSnake() {
  const moveSegment = SEGMENT_MOVEMENTS[snake.direction]

  snake.body.length = snake.tailSize + 2

  const voidIndex = snake.body.length - 1

  for (let i = voidIndex; i > 0; i--) {
    snake.body[i] = { ...snake.body[i - 1] }

    const { x, y } = snake.body[i]

    if ((x !== undefined) & (y !== undefined)) BOARD[y][x] = snake.gridValue
  }

  BOARD[snake.body[voidIndex].y][snake.body[voidIndex].x] = 0

  moveSegment()
  teleportSnakeHead()

  checkColisions()

  BOARD[snake.body[0].y][snake.body[0].x] = snake.gridValue
}

function checkColisions() {
  const { x, y } = snake.body[0]

  if (snake.gridValue === BOARD[y][x]) {
    snake.direction = 'none'
    document.location.reload()
  }
}

/* La manzana */

const apple = {
  position: { x: 10, y: 20 },
  isGeneretable: true,
  color: '#970',
  gridValue: 6,

  generate: function (callback) {
    this.isGeneretable = false

    const { x, y } = callback(this.position.x, this.position.y) || this.position

    this.position.x = x
    this.position.y = y
  },
}

function checkApple() {
  if (apple.isGeneretable) {
    apple.generate((x, y) => {
      while (BOARD[y][x] !== 0) {
        x = Math.floor(Math.random() * BOARD.length)
        y = Math.floor(Math.random() * BOARD[0].length)
      }

      BOARD[y][x] = apple.gridValue

      return { x, y }
    })
  }

  if (BOARD[apple.position.y][apple.position.x] !== apple.gridValue) {
    apple.isGeneretable = true

    points++
    snake.tailSize++
  }
}

/* Controles */

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

/* Game loop */

function draw() {
  moveSnake()
  checkApple()

  const colors = {
    0: '#000b10',
    [snake.gridValue]: snake.color,
    [apple.gridValue]: apple.color,
  }

  BOARD.forEach((row, y) => {
    row.forEach((value, x) => {
      context.fillStyle = colors[value] || colors[0]

      context.fillRect(x, y, 1, 1)
    })
  })

  recordPoints.innerHTML = `Points: ${points}`
}

const gameLoop = setInterval(draw, 1000 / 15)
