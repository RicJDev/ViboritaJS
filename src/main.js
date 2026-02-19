import './game.css'
import './index.css'

function game() {
  // Aqui va el juego
}

/**@type {HTMLButtonElement} */
const playButton = document.querySelector('.play-button')

playButton.addEventListener('click', function () {
  console.log('Juego iniciado!')

  this.disabled = true

  // setInterval(game, 1000 / 12)
})
