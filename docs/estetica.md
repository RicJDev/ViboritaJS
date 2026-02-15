# 🍩 Guía de Estilo: Proyecto Springfield

Esta guía define la estética **Cartoon-Style** basada en _Los Simpson_. La interfaz debe sentirse como un dibujo animado hecho a mano: con trazos definidos, colores saturados y una geometría ligeramente irregular.

---

## 🎨 Paleta de Colores (Variables CSS)

Los colores deben aplicarse de forma plana (sin degradados complejos). Utiliza estas variables en tu archivo global de estilos:

| Variable           | Hex Code  | Uso Sugerido                                          |
| ------------------ | --------- | ----------------------------------------------------- |
| `--simpson-yellow` | `#fadf0b` | Fondos principales, acentos de marca.                 |
| `--simpson-blue`   | `#6fc3f0` | Fondos secundarios, botones de acción.                |
| `--simpson-pink`   | `#f5a9b8` | Notificaciones, elementos destacados ("Donut style"). |
| `--simpson-green`  | `#8cc084` | Éxito, confirmaciones, áreas naturales.               |
| `--simpson-red`    | `#f54b4b` | Errores, alertas, botones de peligro.                 |
| `--simpson-black`  | `#2d2d2d` | Trazos (borders), sombras y texto principal.          |
| `--simpson-white`  | `#fef9e7` | Fondos de tarjetas y áreas de lectura.                |

---

## 🔤 Tipografía y Jerarquía

Para mantener la estética de cómic, utilizaremos fuentes de Google Fonts con alta personalidad.

### 1. Títulos (`<h1>` a `<h3>`)

- **Fuente:** `Bangers`, cursive.
- **Estilo:** Muy grande, con poco espaciado entre letras (`letter-spacing: -1px`).
- **Uso:** Encabezados de sección y llamadas a la acción (CTAs).

### 2. Cuerpo de Texto (`<p>`, `<span>`, inputs)

- **Fuente:** `Patrick Hand`.
- **Estilo:** Legible pero con trazo manual.
- **Tamaño base:** `16px` o `1.1rem`.

---

## 📐 Reglas de Composición UI

Para que el componente "se sienta" Simpson, debe cumplir con estas tres reglas de oro:

### 1. El Trazo Negro (The Ink Look)

Casi todos los elementos contenedores (tarjetas, botones, inputs) deben llevar un borde sólido:

> `border: 3px solid var(--simpson-black);`

### 2. Sombras de Bloque (Hard Shadows)

No uses `blur` en las sombras. Queremos sombras proyectadas que parezcan una segunda capa de dibujo:

> `box-shadow: 5px 5px 0 var(--simpson-black);`

### 3. Geometría Orgánica

Evita las esquinas perfectamente cuadradas. Los personajes y edificios de la serie son redondeados:

- **Border-radius:** `20px` a `30px` para contenedores.
- **Botones:** Forma de cápsula (`50px`).

---

## 🧪 Implementación de Componentes

### Estructura de Tarjeta Estándar

```css
.card-springfield {
  background-color: var(--simpson-white);
  border: 4px solid var(--simpson-black);
  border-radius: 30px;
  padding: 24px;
  box-shadow: 8px 8px 0 var(--simpson-black);
  transition: transform 0.2s ease;
}

.card-springfield:hover {
  /* Efecto de 'pop' al interactuar */
  transform: scale(1.02);
}
```

### Botones Interactivos

Los botones deben simular profundidad física al ser presionados mediante la manipulación de la sombra y la traslación:

```css
button.primary {
  background: var(--simpson-blue);
  font-family: 'Bangers', cursive;
  padding: 12px 24px;
  border: 3px solid var(--simpson-black);
  box-shadow: 4px 4px 0 var(--simpson-black);
  cursor: pointer;
}

button.primary:active {
  /* Simula el click bajando el botón hacia la sombra */
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--simpson-black);
}
```

---

## 💡 Notas Adicionales para Devs

- **Micro-interacciones:** Al pasar el ratón por encima de elementos clickeables, usa un ligero "bounce" (rebote) en lugar de una transición lineal aburrida.
- **Patrones de fondo:** Para el `<body>`, puedes usar un patrón de puntos sutil o nubes simplificadas para evitar grandes áreas de color plano que cansen la vista.
- **Iconografía:** Prioriza iconos con trazos gruesos. Si usas SVG, asegúrate de que el `stroke-width` sea prominente.
