export class Character {
  #img;
  constructor(game, src, x, y) {
    this.canvasCtx = game.canvasCtx;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.src = src;
    this.#img = new Image();
    this.#img.src = this.src;
    this.a = 0.02;
    this.speed_y = 0;
    this.width = 30;
    this.height = 20;
  }

  setSpeed(speed) {
    this.speed = speed;
  }
  drop() {
    this.speed_y += this.a;
    this.y += this.speed_y;
  }
  jump() {
    this.speed_y = -1.51;
  }
  setImg(src) {
    this.src = src;
    this.#img = new Image();
    this.#img.src = this.src;
  }
  check_die(x, y, width, height) {
    if (this.check_point_in_area(this.x, this.y, x, y, width, height))
      return true;
    if (
      this.check_point_in_area(
        this.x,
        this.y + this.height,
        x,
        y,
        width,
        height
      )
    )
      return true;
    if (
      this.check_point_in_area(this.x + this.width, this.y, x, y, width, height)
    )
      return true;
    if (
      this.check_point_in_area(
        this.x + this.width,
        this.y + this.height,
        x,
        y,
        width,
        height
      )
    )
      return true;
    return false;
  }
  check_point_in_area(x, y, x_area, y_area, width, height) {
    if (x > x_area && x < x_area + width && y > y_area && y < y_area + height) {
      return true;
    } else {
      return false;
    }
  }
  update() {
    this.canvasCtx.drawImage(
      this.#img,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.drop();
  }
}
