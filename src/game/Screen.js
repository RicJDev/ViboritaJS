export class Screen {
  /**@type {HTMLCanvasElement} */
  #canvas;
  /**@type {CanvasRenderingContext2D} */
  #context;

  /**
   * @param {HTMLCanvasElement} canvas
   * */
  constructor(canvas, options = { side: 30, blockSize: 15, background: "#001010" }) {
    this.side = options.side;
    this.blockSize = options.blockSize;
    this.#canvas = canvas;
    this.#canvas.style.background = options.background;
    this.#canvas.height = this.side * this.blockSize;
    this.#canvas.width = this.side * this.blockSize;
    this.#context = this.#canvas.getContext("2d");
    this.#context.scale(this.blockSize, this.blockSize);
  }

  /**
   * @param {...{coords: {x: number, y: number}, color: string}} elements
   * */
  update(...elements) {
    this.clear();

    for (const { coords, color } of elements) {
      this.#context.fillStyle = color;
      this.#context.fillRect(coords.x, coords.y, 1, 1);
    }
  }

  clear() {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
  }

  get background() {
    return this.#canvas.style.background;
  }

  set background(background) {
    this.#canvas.style.background = background;
  }
}
