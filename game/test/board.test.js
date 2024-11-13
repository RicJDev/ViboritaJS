import { Board } from '../src/components/boards/board.js'
import { Snake } from '../src/components/snake.js'
import { Item } from '../src/components/item.js'

import { Level } from '../src/components/level.js'

const testBoard = new Board(5),
  testItem = new Item(),
  testSnake = new Snake()

const testLevel = new Level(testBoard, testSnake, testItem)

testItem.position.x = 0
testItem.position.y = 0

testSnake.direction = 'down'

for (let index = 0; index < 10; index++) {
  console.log(' ')
  testLevel.grid.forEach((row) => console.log(row.join(' ')))

  testSnake.move(testBoard.width, testBoard.height)
}
