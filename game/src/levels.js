import { ObstaclesCollection } from './components.js'

/*-------------------- COLECCIONES DE OBSTACULOS PARA LOS NIVELES ---------------------*/
//-------------------------------------------------------------------------------------//

const _01 = new ObstaclesCollection()

function addRow(x, y, rowSize) {
  for (let i = x; i < x + rowSize; i++) _01.add(i, y)
}

addRow(8, 22, 15)
addRow(8, 6, 15)

//--------------------------------------------------------------------------------------//

const _02 = new ObstaclesCollection()

// TODO: obstaculos del nivel 2

//--------------------------------------------------------------------------------------//

const _03 = new ObstaclesCollection()

// TODO: obstaculos del nivel 3

//--------------------------------------------------------------------------------------//

export { _01, _02, _03 }
