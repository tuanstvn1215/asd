export class Pipe {
  constructor(game) {
    this.game = game;
    this.y = 0;
    this.x = 0;
    this.status = null;
    this.safe_zone = this.game.safe_zone;
    this.width = 0;
    this.height = 0;
    this.test = false;
  }

  init(status, x, y_safe_zone, width) {
    this.status = status;
    if (status) {
      this.y = 0;
      this.x = x;
      this.width = width;
      this.height = y_safe_zone;
    } else {
      this.x = x;
      this.y = y_safe_zone + this.safe_zone;
      this.width = width;
      this.height = this.game.height - y_safe_zone + this.safe_zone;
    }

    this.game.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
  }
  update(params) {
    this.x -= 1;

    this.game.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
    if (
      this.game.character.check_die(this.x, this.y, this.width, this.height)
    ) {
      if (this.test == false) {
        console.log("thua r");
      }
      this.test = true;
    } else {
      this.test = false;
    }
  }
}
