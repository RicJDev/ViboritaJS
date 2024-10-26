import { LEVEL_1, LEVEL_2, LEVEL_3 } from './src/components/levels.js'
import { snake } from './src/components/snake.js'

snake.direction = 'up'

/* Creando tablero */

// Dimensiones del tablero.

const BOARD_HEIGHT = 30
const BOARD_WIDTH = 30
const BLOCK_SIZE = 15

// Generación del tablero.

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

function moveSnake(board = LEVEL_1) {
  const SNAKE_DIRECTIONS = {
    up: () => Snake.body[0].y--,
    down: () => Snake.body[0].y++,
    left: () => Snake.body[0].x--,
    right: () => Snake.body[0].x++,
    none: () => {},
  }

  const moveHead = SNAKE_DIRECTIONS[this.direction]
  this.body.length = this.size + 2

  const voidIndex = this.body.length - 1

  for (let i = voidIndex; i > 0; i--) this.body[i] = { ...this.body[i - 1] }

  moveHead()

  const { x, y } = Snake.body[0]

  if (x > board.length) Snake.body[0].x = 0
  if (x < 0) Snake.body[0].x = board.length - 1

  if (y > board[0].length) Snake.body[0].y = 0
  if (y < 0) Snake.body[0].y = board[0].length - 1

  board[y][x] = Snake.gridValue
}

function checkColisions() {
  const { x, y } = Snake.body[0]

  const actions = new Map([
    [0, () => {}],

    [10, gameOver],
    [Snake.gridValue, gameOver],

    [apple.gridValue, increaseSnakeSize],
  ])

  const action = actions.get(LEVEL_1[y][x])

  action()
}

const originalColor = Snake.color

function increaseSnakeSize() {
  Snake.color = '#99b'

  setTimeout(() => {
    Snake.color = originalColor
  }, 10)

  appleBite.currentTime = 0
  appleBite.play()

  apple.isGeneretable = true

  points++
  Snake.size++
}

function gameOver() {
  Snake.direction = 'none'

  document.removeEventListener('keydown', controls)

  obstacleColor = '#111'
  background = '#d44'

  Snake.color = '#111'
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

    while (LEVEL_1[y][x] !== 0) {
      x = Math.floor(Math.random() * LEVEL_1.length)
      y = Math.floor(Math.random() * LEVEL_1[0].length)
    }

    LEVEL_1[y][x] = apple.gridValue

    this.position.x = x
    this.position.y = y
  },
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
    if (Snake.direction !== 'down') Snake.direction = 'up'
  }

  if (EVENT_MOVEMENTS.DOWN.includes(event.key)) {
    if (Snake.direction !== 'up') Snake.direction = 'down'
  }

  if (EVENT_MOVEMENTS.LEFT.includes(event.key)) {
    if (Snake.direction !== 'right') Snake.direction = 'left'
  }

  if (EVENT_MOVEMENTS.RIGHT.includes(event.key)) {
    if (Snake.direction !== 'left') Snake.direction = 'right'
  }
}

document.addEventListener('keydown', controls)

/* Game loop */

function draw() {
  if (apple.isGeneretable) apple.generate()

  moveSnake()

  const colors = {
    0: background,
    [Snake.gridValue]: Snake.color,
    [apple.gridValue]: apple.color,
    10: obstacleColor,
  }

  LEVEL_1.forEach((row, y) => {
    row.forEach((value, x) => {
      context.fillStyle = colors[value] || colors[0]

      context.fillRect(x, y, 1, 1)
    })
  })

  console.log(Snake.body[0])

  recordPoints.innerHTML = `Points: ${points}`
}

const gameLoop = setInterval(draw, 1000 / 13)
