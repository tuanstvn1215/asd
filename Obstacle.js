import { Pipe } from "./Pipe.js";

export class Obstacle {
  constructor(game) {
    this.game = game;
    this.speed = 0;
    this.pipes = [];
  }
  setLevel(level) {
    this.level = level;
  }
  init_pipe() {
    let y_safe_zone = Math.random() * this.game.height - this.game.safe_zone;
    if (y_safe_zone < 0) y_safe_zone = 0;
    let up_pipe = new Pipe(this.game);
    let down_pipe = new Pipe(this.game);
    let x = this.game.width;
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    let level_pipe = getRandomInt(this.level);
    switch (level_pipe) {
      case 0:
        up_pipe.init(0, x, y_safe_zone, 70, 1);
        down_pipe.init(1, x, y_safe_zone, 70, 1);

        break;
      case 1:
        up_pipe.init(0, x, y_safe_zone, 140, 1);
        down_pipe.init(1, x, y_safe_zone, 140, 1);
        break;
      case 2:
        up_pipe.init(0, x, y_safe_zone, 1000, 2);
        down_pipe.init(1, x, y_safe_zone, 1000, 2);
        break;

      case 3:
        up_pipe.init(0, x, y_safe_zone, 1000, 2);
        down_pipe.init(1, x, y_safe_zone, 1000, 2);
        break;

      case 4:
        up_pipe.init(0, x, y_safe_zone, 1000, 2);
        down_pipe.init(1, x, y_safe_zone, 1000, 2);

        break;
      default:
        break;
    }
    this.pipes.push({
      y: y_safe_zone,
      x: x,
      up_pipe: up_pipe,
      down_pipe: down_pipe,
    });
  }
  async update() {
    switch (this.level) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      default:
        break;
    }

    if (this.pipes[0].up_pipe.x == -100) {
      this.pipes.shift();
    }

    if (
      this.pipes[this.pipes.length - 1].up_pipe.x ==
      this.game.width - this.game.pipe_to_pipe - this.pipes[0].up_pipe.width
    ) {
      this.init_pipe();
    }

    await this.pipes.forEach((pipes) => {
      pipes.up_pipe.update();
      pipes.down_pipe.update();
    });
  }
}
