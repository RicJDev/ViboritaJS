import { Snake } from '../snake.js'

const snake = new Snake()

test('Test de movimiento a la izquierda.', () => {
  snake.direction = 'left'
  const { x, y } = snake.body[0]

  snake.move()
  expect(snake.body[0].x).toBe(x - 1)
  expect(snake.body[0].y).toBe(y)
})

test('Test de movimiento a la derecha.', () => {
  snake.direction = 'right'
  const { x, y } = snake.body[0]

  snake.move()
  expect(snake.body[0].x).toBe(x + 1)
  expect(snake.body[0].y).toBe(y)
})

test('Test de movimiento hacia arriba.', () => {
  snake.direction = 'up'
  const { x, y } = snake.body[0]

  snake.move()
  expect(snake.body[0].y).toBe(y - 1)
  expect(snake.body[0].x).toBe(x)
})

test('Test de movimiento hacia abajo.', () => {
  snake.direction = 'down'
  const { x, y } = snake.body[0]

  snake.move()
  expect(snake.body[0].y).toBe(y + 1)
  expect(snake.body[0].x).toBe(x)
})
