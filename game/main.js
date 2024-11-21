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

const deathSFX = new window.Audio('../game/assets/deathEffect.ogg')
deathSFX.playbackRate = 4

const biteSFX = new window.Audio('../game/assets/appleBite.ogg')
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

  let x = 0,
    y = 0

  do {
    x = Math.floor(Math.random() * 30)
    y = Math.floor(Math.random() * 30)
  } while (coords.some((coord) => coord.x === x && coord.y === y))

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

    apple.isGeneretable = true
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

const moveInputs = {
  ArrowUp: () => (snake.direction = 'up'),
  ArrowDown: () => (snake.direction = 'down'),
  ArrowLeft: () => (snake.direction = 'left'),
  ArrowRight: () => (snake.direction = 'right'),

  none: () => {},
}

const directionOposites = { up: 'down', down: 'up', left: 'right', right: 'left' }

function controls(event) {
  const previousDirection = snake.direction

  ;(moveInputs[event.key] || moveInputs.none)()

  if (directionOposites[snake.direction] == previousDirection) {
    snake.direction = previousDirection
  }
}

document.addEventListener('keydown', controls)

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

  draw(_01)
  draw(apple)

  draw(snake)

  checkColisions()
  checkApple()

  snake.move()

  updateRecord()
}

setInterval(gameLoop, 1000 / 14)
