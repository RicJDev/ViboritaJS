import { Apple } from './components/Apple.js'
import { Snake } from './components/Snake.js'
import { Level } from './game/Level.js'
import { Screen } from './game/Screen.js'
import { obstacles } from './game/obstacles.js'

const apple = new Apple()
const snake = new Snake()

const levels = Array.from({ length: obstacles.length }, (_, i) => {
  return new Level({
    apple: apple,
    snake: snake,
    obstacles: obstacles[i],
  })
})

const screen = new Screen({
  boardSize: 30,
  blockSize: 20,
  canvas: document.querySelector('canvas'),
})

const deathSFX = new Audio('./src/assets/deathEffect.ogg')
deathSFX.playbackRate = 4
const biteSFX = new Audio('./src/assets/appleBite.ogg')
biteSFX.load()
biteSFX.playbackRate = 6

let points = 0
let levelIndex = 0
let currentLevel = levels.at(levelIndex) || levels.at(0)

function checkPoints() {
  if (points == 3) {
    points = 0
    levelIndex++

    snake.direction = 'right'
    snake.head.y = 1
    snake.head.x = 1
    snake.size = 2
  }
}

function generateApple({ obstacles, snake, apple }) {
  apple.isGeneretable = true

  apple.generate((x, y, limits) => {
    while (
      obstacles.coords.some((coord) => coord.x === x && coord.y === y) ||
      snake.coords.some((coord) => coord.x === x && coord.y === y)
    ) {
      x = Math.floor(Math.random() * limits.x)
      y = Math.floor(Math.random() * limits.y)
    }

    return { x, y }
  })
}

function checkApple({ snake, apple, obstacles }) {
  const prevColor = snake.color

  if (snake.head.x === apple.coords.x && snake.head.y === apple.coords.y) {
    biteSFX.currentTime = 0
    biteSFX.play()

    snake.color = '#7bfadf'

    generateApple({ apple, snake, obstacles })

    snake.size++
    points++

    setTimeout(() => (snake.color = prevColor), 200)
  }
}

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

function gameOver({ obstacles, snake, apple }, screen) {
  document.removeEventListener('keydown', controls)
  deathSFX.play()

  screen.background = '#a22'

  snake.direction = 'none'
  snake.color = '#111'
  snake.isAlive = false
  obstacles.color = '#111'
  apple.color = '#eee'

  setTimeout(() => {
    document.location.reload()
  }, 400)
}

function checkColisions({ obstacles, snake, apple }, screen) {
  const { head } = snake

  const death =
    obstacles.coords.some((coord) => coord.x === head.x && coord.y === head.y) ||
    snake.coords.some((value, index) => {
      if (index !== 0) {
        return value.x === head.x && value.y === head.y
      }

      return false
    })

  if (death) {
    gameOver({ obstacles, snake, apple }, screen)
  }
}

const $recordPoints = document.querySelector('.record-points')
const $currentLevel = document.querySelector('.current-level')

function updateRecord() {
  $recordPoints.innerHTML = `Points: ${points}`
  $currentLevel.innerHTML = `Level: ${levelIndex + 1}`
}

generateApple(currentLevel)

function main() {
  currentLevel = levels.at(levelIndex) || levels.at(0)
  checkPoints()

  screen.update(...currentLevel.elements)

  checkApple(currentLevel, screen)
  checkColisions(currentLevel, screen)
  updateRecord()

  snake.move()
}

setInterval(main, 1000 / 12)
