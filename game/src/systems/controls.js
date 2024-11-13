const eventMovements = {
  up: ['ArrowUp', 'w'],
  down: ['ArrowDown', 's'],
  left: ['ArrowLeft', 'a'],
  right: ['ArrowRight', 'd'],
}

function controls(snake) {
  document.addEventListener('keydown', (event) => {
    if (eventMovements.up.includes(event.key)) {
      if (snake.direction !== 'down') snake.direction = 'up'
    }

    if (eventMovements.down.includes(event.key)) {
      if (snake.direction !== 'up') snake.direction = 'down'
    }

    if (eventMovements.left.includes(event.key)) {
      if (snake.direction !== 'right') snake.direction = 'left'
    }

    if (eventMovements.right.includes(event.key)) {
      if (snake.direction !== 'left') snake.direction = 'right'
    }
  })
}

export { controls }
