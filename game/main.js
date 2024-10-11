// Dimensiones del tablero.

const BOARD_HEIGHT = 30
const BOARD_WIDTH = 30
const BLOCK_SIZE = 12

// Generación del tablero.

const BOARD = new Array(BOARD_HEIGHT)
for (let i = 0; i < BOARD.length; i++) BOARD[i] = new Array(BOARD_WIDTH).fill(0)

// Elementos HTML.

const pointsRecord = document.querySelector('.record-points')

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.height = BOARD_HEIGHT * BLOCK_SIZE
canvas.width = BOARD_WIDTH * BLOCK_SIZE

context.scale(BLOCK_SIZE, BLOCK_SIZE)

const gameOverSoundEffect = new window.Audio(
  './src/assets/sounds/277403__landlucky__game-over-sfx-and-voice.wav'
)
gameOverSoundEffect.preload = 'auto'

// Objeto snake, que representa a nuestra serpiente.

const snake = {
  body: [{ x: 1, y: 1 }],

  direction: 'right',

  tailSize: 2,

  values: [1, 2, 3, 4],
}

// Función para teletransportar a la serpiente si se sale de los límites del tablero.

function teleportSegment(index) {
  const segment = snake.body[index]

  if (segment.y < 0) segment.y = BOARD.length - 1
  if (segment.y >= BOARD.length) segment.y = 0

  if (segment.x < 0) segment.x = BOARD[0].length - 1
  if (segment.x >= BOARD[0].length) segment.x = 0
}

// Sistema de movimiento. Cambia según la dirección de la serpiente.

const SEGMENT_MOVEMENTS = {
  up: (index) => snake.body[index].y--,
  down: (index) => snake.body[index].y++,
  left: (index) => snake.body[index].x--,
  right: (index) => snake.body[index].x++,
  none: (index) => {
    snake.body[index] = snake.body[index]
  },
}

function moveSnake() {
  const moveSegment = SEGMENT_MOVEMENTS[snake.direction]

  snake.body.length = snake.tailSize + 2

  const voidIndex = snake.body.length - 1

  for (let i = voidIndex; i > 0; i--) {
    snake.body[i] = { ...snake.body[i - 1] }

    const { x, y } = snake.body[i]

    if ((x !== undefined) & (y !== undefined)) BOARD[y][x] = snake.values[1]
    if (i > 12) BOARD[y][x] = snake.values[2]
    if (i > 16) BOARD[y][x] = snake.values[3]
  }

  BOARD[snake.body[voidIndex].y][snake.body[voidIndex].x] = 0

  moveSegment(0)
  teleportSegment(0)

  checkColisions()

  BOARD[snake.body[0].y][snake.body[0].x] = snake.values[0]
}

function checkColisions() {
  const { x, y } = snake.body[0]

  if (snake.values.includes(BOARD[y][x])) {
    gameOverSoundEffect.play()
    snake.direction = 'none'

    window.alert('Game over, my friend!')

    document.location.reload()
  }
}

// Sistema para generar una manzana aleatoria. Incluye la primera versión de un sitema básico de puntos.

import { Item } from './src/components/Item.js'

let points = 0

const apple = new Item()

/**@param {Item} item */
function checkItem(item) {
  if (item.isGeneretable) {
    item.generate((x, y) => {
      while (BOARD[y][x] !== 0) {
        x = Math.floor(Math.random() * BOARD.length)
        y = Math.floor(Math.random() * BOARD[0].length)
      }

      BOARD[y][x] = item.gridValue

      return { x, y }
    })
  }

  if (BOARD[item.position.y][item.position.x] !== item.gridValue) {
    item.isGeneretable = true

    points++
    snake.tailSize++
  }
}

// Añadiendo controles. Se hicieron de manera que el jugador no pueda moverse en la dirección opuesta a la que lleva.

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

// Dibujado de elementos en el canvas.

function draw() {
  moveSnake()

  checkItem(apple)

  const colors = {
    0: '#001010',
    [snake.values[0]]: '#2a8',
    [snake.values[1]]: '#cc91',
    [snake.values[2]]: '#3d92',
    [snake.values[3]]: '#3d91',
    [apple.gridValue]: apple.color,
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
