import { Item } from '../src/components/Item.js'

test("Prueba de cambio de estado 'isGeneretable'", () => {
  const apple = new Item()
  const { isGeneretable } = apple

  apple.generate()

  expect(isGeneretable !== apple.isGeneretable).toBe(true)
})

test("Prueba de aleatoridad de generacion con 'defaultCallback'", () => {
  const apple = new Item()
  let hasChanged = false

  for (let i = 0; i < 100; i++) {
    const { x, y } = apple.position

    apple.generate()

    if (x !== apple.position.x || y !== apple.position.y) hasChanged = true

    apple.isGeneretable = true
  }

  expect(hasChanged).toBe(true)
})

test("Prueba de no aleatoridad con 'callbackCustom'", () => {
  const apple = new Item()
  let hasChanged = false

  for (let i = 0; i < 100; i++) {
    const { x } = apple.position

    apple.generate((x, y) => {
      y--
      return { x, y }
    })

    if (x !== apple.position.x) hasChanged = true

    expect(hasChanged).toBe(false)
  }
})
