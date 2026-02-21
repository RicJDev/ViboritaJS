import './main.css'
import './index.css'
import { Screen } from './game/Screen'
import { smiley } from './mock/smiley'

const screen = new Screen(document.querySelector('.game-board'))

const wasdInputs = {
  w: 'up',
  s: 'down',
  a: 'left',
  d: 'right',
}

const arrowInputs = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowRight: 'right',
  ArrowLeft: 'left',
}

// Controls stuff

const opposites = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
}

let direction = 'up'
let lastProcessedDirection = 'up'

document.addEventListener('keydown', (event) => {
  const nextDirection = arrowInputs[event.key] ?? wasdInputs[event.key]

  if (nextDirection && opposites[nextDirection] !== lastProcessedDirection) {
    direction = nextDirection
  }
})

// Physics stuff

function updatePhysics() {
  smiley.forEach((pixel) => {
    if (direction === 'up') pixel.coords.y--
    if (direction === 'down') pixel.coords.y++
    if (direction === 'left') pixel.coords.x--
    if (direction === 'right') pixel.coords.x++

    if (pixel.coords.y > screen.side) pixel.coords.y = 0
    if (pixel.coords.y < 0) pixel.coords.y = screen.side
    if (pixel.coords.x > screen.side) pixel.coords.x = 0
    if (pixel.coords.x < 0) pixel.coords.x = screen.side
  })

  lastProcessedDirection = direction
}

// Game loop

const MAX_FPS = 12
const FRAME_INTERVAL_MS = 1000 / MAX_FPS
let previousTimeMs = 0

let inGame

function gameLoop() {
  if (!inGame) return

  requestAnimationFrame((currentTimeMs) => {
    screen.update(...smiley)

    const deltaTimeMs = currentTimeMs - previousTimeMs
    if (deltaTimeMs >= FRAME_INTERVAL_MS) {
      updatePhysics()
      previousTimeMs = currentTimeMs - (deltaTimeMs % FRAME_INTERVAL_MS)
    }

    gameLoop()
  })
}

// Start and end

function start() {
  alert('El juego va a empezar')
  inGame = true
  gameLoop()
}

function end() {
  inGame = false
}

const playButton = document.querySelector('.play-button')
playButton.addEventListener('click', () => {
  if (inGame) {
    end()
    return
  }

  start()
})
