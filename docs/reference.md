## Modules

<dl>
<dt><a href="#module_Entities">Entities</a></dt>
<dd></dd>
<dt><a href="#module_Game">Game</a></dt>
<dd></dd>
</dl>

<a name="module_Entities"></a>

## Entities

- [Entities](#module_Entities)
  - [.Pixel](#module_Entities.Pixel)
    - [new exports.Pixel(color, coords)](#new_module_Entities.Pixel_new)
    - [.color](#module_Entities.Pixel+color) : <code>string</code>
    - [.coords](#module_Entities.Pixel+coords) : <code>Object</code>

<a name="module_Entities.Pixel"></a>

### Entities.Pixel

Pixel

Representa un píxel individual en la cuadrícula del juego.
Un píxel tiene un color y unas coordenadas (x, y) que indican su posición en la cuadrícula.

**Kind**: static class of [<code>Entities</code>](#module_Entities)

- [.Pixel](#module_Entities.Pixel)
  - [new exports.Pixel(color, coords)](#new_module_Entities.Pixel_new)
  - [.color](#module_Entities.Pixel+color) : <code>string</code>
  - [.coords](#module_Entities.Pixel+coords) : <code>Object</code>

<a name="new_module_Entities.Pixel_new"></a>

#### new exports.Pixel(color, coords)

Crea una nueva instancia de Pixel.

| Param  | Type                | Description                                                   |
| ------ | ------------------- | ------------------------------------------------------------- |
| color  | <code>string</code> | El color del píxel.                                           |
| coords | <code>Object</code> | Objeto con las propiedades `x` e `y` que definen la posición. |

<a name="module_Entities.Pixel+color"></a>

#### pixel.color : <code>string</code>

El color del píxel en formato CSS (por ejemplo, '#ff0000', 'red').

**Kind**: instance property of [<code>Pixel</code>](#module_Entities.Pixel)  
<a name="module_Entities.Pixel+coords"></a>

#### pixel.coords : <code>Object</code>

Las coordenadas del píxel dentro de la cuadrícula.

**Kind**: instance property of [<code>Pixel</code>](#module_Entities.Pixel)  
<a name="module_Game"></a>

## Game

- [Game](#module_Game)
  - [.Screen](#module_Game.Screen)
    - [new exports.Screen(canvas, [options])](#new_module_Game.Screen_new)
    - [.background](#module_Game.Screen+background) ⇒ <code>string</code>
    - [.background](#module_Game.Screen+background)
    - [.update(...elements)](#module_Game.Screen+update)
    - [.clear()](#module_Game.Screen+clear)

<a name="module_Game.Screen"></a>

### Game.Screen

Screen

Gestiona una pantalla de canvas basada en cuadrícula para renderizar elementos del juego.
La pantalla se divide en una cuadrícula cuadrada donde cada celda tiene un tamaño fijo.
El renderizado se realiza escalando el contexto del canvas para que cada celda de la
cuadrícula corresponda a una unidad de 1x1, simplificando la lógica de dibujo.

**Kind**: static class of [<code>Game</code>](#module_Game)

- [.Screen](#module_Game.Screen)
  - [new exports.Screen(canvas, [options])](#new_module_Game.Screen_new)
  - [.background](#module_Game.Screen+background) ⇒ <code>string</code>
  - [.background](#module_Game.Screen+background)
  - [.update(...elements)](#module_Game.Screen+update)
  - [.clear()](#module_Game.Screen+clear)

<a name="new_module_Game.Screen_new"></a>

#### new exports.Screen(canvas, [options])

Crea una nueva instancia de Screen.

| Param                | Type                           | Default                                      | Description                                                                      |
| -------------------- | ------------------------------ | -------------------------------------------- | -------------------------------------------------------------------------------- |
| canvas               | <code>HTMLCanvasElement</code> |                                              | El elemento canvas al que se adjuntará la pantalla.                              |
| [options]            | <code>Object</code>            |                                              | Opciones de configuración.                                                       |
| [options.side]       | <code>number</code>            | <code>30</code>                              | Número de celdas de la cuadrícula por lado (crea una cuadrícula de lado x lado). |
| [options.blockSize]  | <code>number</code>            | <code>15</code>                              | Tamaño de cada celda de la cuadrícula en píxeles.                                |
| [options.background] | <code>string</code>            | <code>&quot;&#x27;#001010&#x27;&quot;</code> | Color de fondo CSS del canvas.                                                   |

<a name="module_Game.Screen+background"></a>

#### screen.background ⇒ <code>string</code>

Obtiene el color de fondo actual del canvas.

**Kind**: instance property of [<code>Screen</code>](#module_Game.Screen)  
**Returns**: <code>string</code> - El color de fondo CSS.  
<a name="module_Game.Screen+background"></a>

#### screen.background

Establece el color de fondo del canvas.

**Kind**: instance property of [<code>Screen</code>](#module_Game.Screen)

| Param      | Type                | Description                  |
| ---------- | ------------------- | ---------------------------- |
| background | <code>string</code> | El nuevo color de fondo CSS. |

<a name="module_Game.Screen+update"></a>

#### screen.update(...elements)

Actualiza la pantalla limpiándola y luego dibujando los elementos proporcionados.
Cada elemento se dibuja como un cuadrado relleno en sus coordenadas de cuadrícula.

**Kind**: instance method of [<code>Screen</code>](#module_Game.Screen)

| Param       | Type               | Description                                           |
| ----------- | ------------------ | ----------------------------------------------------- |
| ...elements | <code>Pixel</code> | Uno o más elementos para renderizar en la cuadrícula. |

<a name="module_Game.Screen+clear"></a>

#### screen.clear()

Limpia todo el canvas, eliminando todo el contenido dibujado.
El color de fondo permanece sin cambios.

**Kind**: instance method of [<code>Screen</code>](#module_Game.Screen)
