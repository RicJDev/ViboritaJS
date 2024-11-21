import { ObstaclesCollection } from './components.js'

/*-------------------- COLECCIONES DE OBSTACULOS PARA LOS NIVELES ---------------------*/
//-------------------------------------------------------------------------------------//

const _01 = new ObstaclesCollection()

const line = 15

function addLine(x, y, lineWidth) {
  for (let i = x; i < x + lineWidth; i++) _01.add(i, y)
}

addLine(8, 22, line)
addLine(8, 6, line)

//--------------------------------------------------------------------------------------//

const _02 = new ObstaclesCollection()

// TODO: obstaculos del nivel 2

//--------------------------------------------------------------------------------------//

const _03 = new ObstaclesCollection()

// TODO: obstaculos del nivel 3

//--------------------------------------------------------------------------------------//

export { _01, _02, _03 }
