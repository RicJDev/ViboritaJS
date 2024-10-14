/* Creando tablero */

// Dimensiones del tablero.

const BOARD_HEIGHT = 30
const BOARD_WIDTH = 30
const BLOCK_SIZE = 15

// Generación del tablero.

/*
const BOARD = new Array(BOARD_HEIGHT)
for (let i = 0; i < BOARD.length; i++) BOARD[i] = new Array(BOARD_WIDTH).fill(0)
*/

import { level1_Board as BOARD } from './src/levels/01.js'

let background = '#000b10'
let obstacleColor = '#d04090'

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

// Efectos de sonido.

const deathEffect = new window.Audio('../game/src/assets/deathEffect.ogg')
deathEffect.playbackRate = 3

const appleBite = new window.Audio('../game/src/assets/appleBite.ogg')
appleBite.load()
appleBite.playbackRate = 3

/* La serpiente */

const snake = {
  body: [{ x: 1, y: 1 }],
  tailSize: 3,

  direction: 'right',

  color: '#4090bf',
  gridValue: 1,
}

const originalColor = snake.color

// Movimientos de la serpiente.

const HEAD_MOVEMENTS = {
  up: () => snake.body[0].y--,
  down: () => snake.body[0].y++,
  left: () => snake.body[0].x--,
  right: () => snake.body[0].x++,
  none: () => {
    document.removeEventListener('keydown', controls)
  },
}

function moveSnake() {
  const moveHead = HEAD_MOVEMENTS[snake.direction]

  snake.body.length = snake.tailSize + 2

  const voidIndex = snake.body.length - 1

  for (let i = voidIndex; i > 0; i--) {
    snake.body[i] = { ...snake.body[i - 1] }

    const { x, y } = snake.body[i]

    if (x & y) BOARD[y][x] = snake.gridValue
  }

  BOARD[snake.body[voidIndex].y][snake.body[voidIndex].x] = 0

  moveHead()
  teleportSnakeHead()

  checkColisions()

  BOARD[snake.body[0].y][snake.body[0].x] = snake.gridValue
}

function teleportSnakeHead() {
  const head = snake.body[0]

  if (head.y < 0) head.y = BOARD.length - 1
  if (head.y >= BOARD.length) head.y = 0

  if (head.x < 0) head.x = BOARD[0].length - 1
  if (head.x >= BOARD[0].length) head.x = 0
}

function checkColisions() {
  const { x, y } = snake.body[0]

  if (BOARD[y][x] === snake.gridValue || BOARD[y][x] === 10) gameOver()
}

function gameOver() {
  snake.direction = 'none'

  document.removeEventListener('keydown', controls)

  obstacleColor = '#111'
  background = '#d44'

  snake.color = '#111'
  apple.color = '#eee'

  deathEffect.play()

  setTimeout(() => {
    document.location.reload()
  }, 800)
}

/* La manzana */

const apple = {
  position: { x: 8, y: 20 },
  isGeneretable: true,
  color: '#970',
  gridValue: 6,

  generate: function () {
    if (!this.isGeneretable) return

    this.isGeneretable = false

    let { x, y } = this.position

    while (BOARD[y][x] !== 0) {
      x = Math.floor(Math.random() * BOARD.length)
      y = Math.floor(Math.random() * BOARD[0].length)
    }

    BOARD[y][x] = apple.gridValue

    this.position.x = x
    this.position.y = y
  },
}

function checkApple() {
  if (apple.isGeneretable) {
    apple.generate()
  }

  if (BOARD[apple.position.y][apple.position.x] !== apple.gridValue) {
    snake.color = '#99b'

    setTimeout(() => {
      snake.color = originalColor
    }, 10)

    appleBite.currentTime = 0
    appleBite.play()

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
    0: background,
    [snake.gridValue]: snake.color,
    [apple.gridValue]: apple.color,
    10: obstacleColor,
  }

  BOARD.forEach((row, y) => {
    row.forEach((value, x) => {
      context.fillStyle = colors[value] || colors[0]

      context.fillRect(x, y, 1, 1)
    })
  })

  recordPoints.innerHTML = `Points: ${points}`
}

const gameLoop = setInterval(draw, 1000 / 13)
