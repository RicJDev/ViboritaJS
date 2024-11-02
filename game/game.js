import * as board from './src/components/boards/index.js'
import { Snake, Item, Level } from './src/components/index.js'

import { render } from './src/systems/render.js'

const mike = new Snake()
const apple = new Item()

const level1 = new Level(board._01, mike, apple)

function draw() {
  render(level1)

  mike.moveHead(() => {
    const { x, y } = mike.head

    if (x > 30) mike.head.x = 0
    if (x < 0) mike.head.x = 30 - 1

    if (y > 30) mike.head.y = 0
    if (y < 0) mike.head.y = 30 - 1
  })
}

setInterval(draw, 1000 / 15)
