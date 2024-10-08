import { Snake } from '../src/components/Snake.js'

test('Prueba de movimiento hacia arriba', () => {
  const frank = new Snake()
  const { x, y } = frank.body[0]

  frank.direction = 'up'
  frank.move()

  expect(frank.body[0].x).toBe(x)
  expect(frank.body[0].y).toBe(y - 1)
})

test('Prueba de movimiento hacia abajo', () => {
  const frank = new Snake()
  const { x, y } = frank.body[0]

  frank.direction = 'down'
  frank.move()

  expect(frank.body[0].x).toBe(x)
  expect(frank.body[0].y).toBe(y + 1)
})

test('Prueba de movimiento hacia la izquierda', () => {
  const frank = new Snake()
  const { x, y } = frank.body[0]

  frank.direction = 'left'
  frank.move()

  expect(frank.body[0].x).toBe(x - 1)
  expect(frank.body[0].y).toBe(y)
})

test('Prueba de movimiento hacia la derecha', () => {
  const frank = new Snake()
  const { x, y } = frank.body[0]

  frank.direction = 'right'
  frank.move()

  expect(frank.body[0].x).toBe(x + 1)
  expect(frank.body[0].y).toBe(y)
})

test('Prueba de inmovilidad', () => {
  const frank = new Snake()
  const { x, y } = frank.body[0]

  frank.direction = 'none'
  frank.move()

  expect(frank.body[0].x).toBe(x)
  expect(frank.body[0].y).toBe(y)
})
