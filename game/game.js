import * as board from './src/components/boards/index.js'

import { Snake } from './src/components/snake.js'
import { Item } from './src/components/item.js'

import { Level } from './src/systems/level.js'

const mike = new Snake()
const apple = new Item()

const level1 = new Level(board._01, mike, apple)

level1.grid.forEach((row) => console.log(row.join(' ')))
