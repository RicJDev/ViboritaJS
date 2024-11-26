import { Snake, Apple } from './src/components.js'
import { _01, _02, _03 } from './src/levels.js'

// CONSTANTES
//-------------------------------------------------------------------------------------//

const blockSize = 15,
  boardSide = 30

// ELEMENTOS HTML
//-------------------------------------------------------------------------------------//

const $recordPoints = document.querySelector('.record-points')
const $currentLevel = document.querySelector('.current-level')

const $canvas = document.querySelector('canvas')

$canvas.style.background = '#000b10'

$canvas.height = boardSide * blockSize
$canvas.width = boardSide * blockSize

const ctx = $canvas.getContext('2d')

ctx.scale(blockSize, blockSize)

// EFECTOS DE SONIDO
//-------------------------------------------------------------------------------------//

const deathSFX = new Audio('../game/assets/deathEffect.ogg')
deathSFX.playbackRate = 4

const biteSFX = new Audio('../game/assets/appleBite.ogg')
biteSFX.load()

biteSFX.playbackRate = 6

// COMPONENTES DEL JUEGO
//-------------------------------------------------------------------------------------//

const snake = new Snake()
const apple = new Apple()

let currentLevel = _01

// LOGICA PARA GESTIONAR LA GENERACION DE LA MANZANA
//-------------------------------------------------------------------------------------//

let points = 0

function generateApple() {
  const { coords } = currentLevel

  apple.isGeneretable = true

  let x = Math.floor(Math.random() * boardSide),
    y = Math.floor(Math.random() * boardSide)

  while (coords.some((coord) => coord.x === x && coord.y === y)) {
    x = Math.floor(Math.random() * boardSide)
    y = Math.floor(Math.random() * boardSide)
  }

  apple.generate(x, y)
}

function checkApple() {
  const { head } = snake,
    { coords } = apple

  const prevColor = snake.color

  if (head.x === coords.x && head.y === coords.y) {
    biteSFX.currentTime = 0
    biteSFX.play()

    snake.color = '#7bfadf'

    generateApple()

    snake.size++
    points++

    setTimeout(() => {
      snake.color = prevColor
    }, 200)
  }
}

// CONTROLES
//-------------------------------------------------------------------------------------//

// TODO: corregir funcionalidad para evitar colisiones por movimientos inesperados

const arrowInputs = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
}

const wasdInputs = {
  w: 'up',
  s: 'down',
  a: 'left',
  d: 'right',
}

function controls(event) {
  const prevDirection = snake.direction

  snake.direction = arrowInputs[event.key] || wasdInputs[event.key] || prevDirection

  if (snake.oppositeDirection === prevDirection) {
    snake.direction = prevDirection
  }
}

document.addEventListener('keydown', controls)

//-------------------------------------------------------------------------------------//

// TODO: agregar soporte para moviles

// LOGICA PARA GESTIONAR LAS COLISIONES
//-------------------------------------------------------------------------------------//

function checkColisions() {
  const { coords } = currentLevel,
    { coords: body } = snake

  const condition =
    coords.some((value) => value.x === snake.head.x && value.y === snake.head.y) ||
    body.some((value, index) => {
      if (index !== 0) return value.x === snake.head.x && value.y === snake.head.y
    })

  if (condition) gameOver()
}

function gameOver() {
  document.removeEventListener('keydown', controls)

  deathSFX.play()

  snake.direction = 'none'
  snake.isAlive = false

  snake.color = '#111'
  _01.color = '#111'

  $canvas.style.background = '#a22'

  apple.color = '#eee'

  setTimeout(() => {
    document.location.reload()
  }, 400)
}

// DIBUJADO DE LOS ELEMENTOS
//-------------------------------------------------------------------------------------//

function draw(element) {
  ctx.fillStyle = element.color

  const { coords } = element

  Array.isArray(coords)
    ? coords.forEach((coord) => ctx.fillRect(coord.x, coord.y, 1, 1))
    : ctx.fillRect(coords.x, coords.y, 1, 1)
}

function updateRecord() {
  $recordPoints.innerHTML = `Points: ${points}`
  $currentLevel.innerHTML = `Level: 1`
}

generateApple()

function gameLoop() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)

  draw(currentLevel)
  draw(apple)

  draw(snake)

  checkColisions()
  checkApple()

  snake.move()

  updateRecord()
}

setInterval(gameLoop, 1000 / 14)
