const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export class Pipe {
  constructor(game) {
    this.level = 2;
    this.game = game;
    this.y = 0;
    this.x = 0;
    this.status = null;
    this.safe_zone = this.game.safe_zone;
    this.width = 0;
    this.height = 0;
    this.test = false;
    this.direction = -0.5;
  }

  init(status, x, y_safe_zone, width, level) {
    this.status = status;
    this.level = level;
    this.y_safe_zone = y_safe_zone;
    if (status) {
      this.y = 0;
      this.x = x;
      this.width = width;
      this.height = this.y_safe_zone;
    } else {
      this.x = x;
      this.y = y_safe_zone + this.safe_zone;
      this.width = width;
      this.height = this.game.height - this.y_safe_zone + this.safe_zone;
    }

    this.game.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
  }
  async update() {
    this.x -= 1;
    switch (this.level) {
      case 1:
        if (this.status) {
          this.y = 0;
          this.height = this.y_safe_zone;
        } else {
          this.y = this.y_safe_zone + this.safe_zone;
          this.height = this.game.height - this.y_safe_zone + this.safe_zone;
        }
        this.game.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
        break;
      case 2:
        if (this.y_safe_zone <= 0) {
          this.direction = -this.direction;
        }
        if (this.game.height <= this.y_safe_zone + this.safe_zone) {
          this.direction = -this.direction;
        }
        this.y_safe_zone += this.direction;
        if (this.status) {
          this.y = 0;
          this.height = this.y_safe_zone;
        } else {
          this.y = this.y_safe_zone + this.safe_zone;
          this.height = this.game.height - this.y_safe_zone + this.safe_zone;
        }
        this.game.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
        break;
      case 3:
        this.x -= 1;
        this.game.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
        break;
      case 4:
        this.x -= 1;
        this.game.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
        break;
      case 5:
        this.x -= 1;
        this.game.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
        break;
    }
    this.game.canvasCtx.fillRect(this.x, this.y, this.width, this.height);
    if (
      this.game.character.check_die(this.x, this.y, this.width, this.height)
    ) {
      if (this.test == false) {
        alert("thua roi");
        delete this.game;
      }
      this.test = true;
    } else {
      this.test = false;
    }
  }
}
