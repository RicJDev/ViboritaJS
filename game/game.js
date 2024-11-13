import * as board from './src/components/boards/index.js'

import { Snake, Item, Level } from './src/components/index.js'

import { Render } from './src/systems/render.js'
import { controls } from './src/systems/controls.js'

const snake = new Snake()
const apple = new Item()

const level1 = new Level(board._01, snake, apple)

const render = new Render()

controls(snake)

function main() {
  render.draw(level1)

  snake.move()
}

setInterval(main, 1000 / 17)
