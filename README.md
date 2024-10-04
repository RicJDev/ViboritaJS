# Viborita.js

Un juego simple tipo Snake. Inspirado en un jueguito de MsDOS, fue desarrollado con JavaSript sin dependencias 🤘

## ¿Cómo surgió este proyecto?

<div align="center">

<video width="320" height="240" controls>
  <source src="images/old_demo.mp4" type="video/mp4">
</video>

</div>

Estaba yo practicando mi lógica con un mini juego del cuál grabé una _"demo"_ (nótense las comillas) y de alguna manera terminó convirtiéndose en una idea más grande... o al menos, más completa.

## ¿Cómo está construido?

En Viborita.js se distinguen cuatro estados:

- **Preparado para jugarse:** el nivel no empieza hasta que el jugador lo inicialice.

- **En movimiento:** el jugador controla a una serpiente que se mantiene en movimiento constante, pudiendo girar a los lados, pero nunca retroceder.

- **Comiendo:** al comer un item el jugador crece y se genera un nuevo item en una posición aleatoria.

- **Fin del nivel:** el jugador ha alcanzado el objetivo del nivel y se le habilita a jugar otro de mayor dificultad.

- **Muerte por choque:** al colisionar con los obstáculos o consigo mismo, el jugador pierde una vida y empieza el nivel desde cero.

Se ha modelado el juego de manera que estos estados sean representados y actualizados según las acciones del jugador.
