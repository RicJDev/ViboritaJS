# PLANTILLA DE OBJETIVOS DEL PROYECTO

## 1. Título del proyecto

_Ejemplo: Snake Game – 5 Niveles_

## 2. Objetivo general

Describe con una frase qué se espera lograr con el proyecto.

_Ejemplo: Desarrollar un juego de la viborita (Snake) jugable en el navegador, con cinco niveles de dificultad progresiva y un botón de inicio, utilizando JavaScript puro (sin librerías externas)._

## 3. Objetivos específicos

Lista los objetivos concretos que se deben cumplir. Piensa en funcionalidades, comportamientos y requisitos.

- Implementar el movimiento clásico de la viborita (arriba, abajo, izquierda, derecha).
- Detectar colisiones con los bordes del tablero o con el propio cuerpo.
- Generar comida en posiciones aleatorias no ocupadas.
- Aumentar la longitud de la viborita al comer.
- Diseñar cinco niveles con alguna variable que los diferencie (velocidad, tamaño del tablero, obstáculos, etc.).
- Incluir un botón "Play" que inicie el juego (y posiblemente reinicie).
- Mostrar puntuación y nivel actual.
- Hacer el juego responsivo para diferentes tamaños de pantalla (opcional).
- …

## 4. Alcance (funcionalidades incluidas y excluidas)

Define qué tendrá el juego y qué no, para evitar desviaciones.

**Incluye:**

- Juego de una sola viborita controlada por teclado.
- Cinco niveles seleccionables de forma automática o progresiva.
- Pantalla de fin de juego con opción de reiniciar.
- …

**No incluye:**

- Modo multijugador.
- Almacenamiento de puntuaciones en base de datos.
- Efectos de sonido (si no se contemplan).
- …

## 5. Requisitos técnicos

- Navegadores objetivo: Chrome, Firefox, Edge, Safari (versiones recientes).
- Tecnologías: HTML5, CSS3, JavaScript (ES6+), sin dependencias externas.
- Despliegue: Archivos estáticos (se puede jugar localmente o en cualquier servidor web).

## 6. Criterios de éxito

¿Cómo sabrás que el proyecto está terminado y cumple su propósito?

- El juego es completamente funcional en los navegadores indicados.
- Se puede completar al menos un nivel sin errores.
- La experiencia de juego es fluida (sin retrasos perceptibles).
- El código está limpio, comentado y organizado.

## 7. Restricciones

- No se permite el uso de librerías o frameworks (solo JavaScript vanilla).
- El juego debe funcionar sin conexión a internet.
- El tamaño total del proyecto no debe exceder X MB (opcional).

## 8. Usuarios objetivo

- Personas que quieran jugar un juego clásico de Snake de forma rápida en el navegador.
- Edad: cualquier persona, sin necesidad de registro.

## 9. Plataforma

- Navegador web (escritorio y posiblemente móvil si se implementa responsive).

## 10. Diseño / Interfaz

Describe brevemente cómo quieres que se vea (colores, estilo, tipografía). Puedes incluir un mockup si lo tienes.

- Fondo oscuro, viborita de color verde, comida roja.
- Botón "Play" grande y visible.
- Marcadores de puntuación y nivel en la parte superior.
- …

## 11. Detalle de los niveles

Para cada nivel, especifica las características que lo diferencian (puede ser una tabla).

| Nivel | Tamaño del tablero | Velocidad (ms por paso) | Obstáculos      | Comida especial     | Condición para avanzar |
| ----- | ------------------ | ----------------------- | --------------- | ------------------- | ---------------------- |
| 1     | 10x10              | 200                     | No              | No                  | Comer 5 alimentos      |
| 2     | 12x12              | 180                     | No              | No                  | Comer 8 alimentos      |
| 3     | 15x15              | 150                     | Paredes fijas   | No                  | Comer 10 alimentos     |
| 4     | 15x15              | 120                     | Paredes fijas   | Sí (aparece cada 3) | Comer 12 alimentos     |
| 5     | 20x20              | 100                     | Paredes móviles | Sí                  | Comer 15 alimentos     |

_(Ajusta según tu idea)_

## 12. Comportamiento del juego (reglas)

- La viborita no puede chocar contra las paredes (o sí, según la modalidad).
- Al comer, la viborita crece y aumenta la puntuación.
- Si choca contra sí misma o contra obstáculos, el juego termina.
- Al completar un nivel, se pasa al siguiente automáticamente (o mediante un botón).
- ...

## 13. Posibles ampliaciones futuras (opcional)

- Añadir efectos visuales (partículas al comer).
- Guardar la puntuación más alta en localStorage.
- Más niveles o editor de niveles.
