import { obstacles } from './obstacles.js'

import { Apple } from './components/Apple.js'
import { Snake } from './components/Snake.js'
import { Screen } from './game/Screen.js'

// import { Level } from './game/Level.js'


// const level1 = new Level({
//   snake: new Snake(),
//   apple: new Apple(),
//   obstacles: obstaclesLevels[0],
// })

const apple = new Apple()
const snake = new Snake()

const screen = new Screen({
  canvas: document.querySelector('canvas'),
  boardSize: 30,
  blockSize: 20,
})

const deathSFX = new Audio('./src/assets/deathEffect.ogg')
deathSFX.playbackRate = 4
const biteSFX = new Audio('./src/assets/appleBite.ogg')
biteSFX.load()
biteSFX.playbackRate = 6

// ...

let points = 0
let currentLevel = 0

const level = obstacles[currentLevel] || obstacles[0]

function checkLevel() {
  if (points == 3) {
    currentLevel++
    snake.direction = 'right'
    snake.head.y = 1
    snake.head.x = 1
    points = 0
    snake.size = 2
  }
}

// let [currentLevel] = levels

function generateApple(level) {
  const { coords } = level
  const { size } = screen

  apple.isGeneretable = true

  let x = Math.floor(Math.random() * size),
    y = Math.floor(Math.random() * size)

  while (coords.some((coord) => coord.x === x && coord.y === y)) {
    x = Math.floor(Math.random() * size)
    y = Math.floor(Math.random() * size)
  }

  apple.generate(x, y)
}

function checkApple(level) {
  const { head } = snake
  const { coords } = apple

  const prevColor = snake.color

  if (head.x === coords.x && head.y === coords.y) {
    biteSFX.currentTime = 0
    biteSFX.play()

    snake.color = '#7bfadf'

    generateApple(level)

    snake.size++
    points++

    setTimeout(() => {
      snake.color = prevColor
    }, 200)
  }
}

// CONTROLS

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

// TODO: corregir funcionalidad para evitar colisiones por movimientos inesperados

function controls(event) {
  const prevDirection = snake.direction

  snake.direction = arrowInputs[event.key] || wasdInputs[event.key] || prevDirection

  if (snake.oppositeDirection === prevDirection) {
    snake.direction = prevDirection
  }
}

document.addEventListener('keydown', controls)

function checkColisions(level) {
  const { coords } = level,
    { coords: body } = snake

  const death =
    coords.some((value) => value.x === snake.head.x && value.y === snake.head.y) ||
    body.some((value, index) => {
      if (index !== 0) return value.x === snake.head.x && value.y === snake.head.y

      return false
    })

  if (death) {
    gameOver(level)
  }
}

function gameOver(level) {
  document.removeEventListener('keydown', controls)
  deathSFX.play()

  snake.direction = 'none'
  snake.color = '#111'
  screen.background = '#a22'
  snake.isAlive = false
  level.color = '#111'
  apple.color = '#eee'

  setTimeout(() => {
    document.location.reload()
  }, 400)
}

const $recordPoints = document.querySelector('.record-points')
const $currentLevel = document.querySelector('.current-level')

function updateRecord() {
  $recordPoints.innerHTML = `Points: ${points}`
  $currentLevel.innerHTML = `Level: ${currentLevel + 1}`
}

generateApple(level)

function main() {
  screen.clear()
  screen.update(obstacles.at(currentLevel) || obstacles.at(0), apple, snake)

  checkColisions(obstacles.at(currentLevel) || obstacles.at(0))
  checkApple(obstacles.at(currentLevel) || obstacles.at(0))

  snake.move()

  updateRecord()
  checkLevel()
}

setInterval(main, 1000 / 12)
