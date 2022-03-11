import { Sound } from "./Sound.js";
import { Background } from "./Background.js";
import { Obstacle } from "./Obstacle.js";
import { Character } from "./Character.js";

export class Game {
  constructor() {
    this.height = 700;
    this.width = 500;
    this.speed = 1;
    this.canvas = document.querySelector("canvas");
    this.canvas.height = this.height;
    this.canvas.width = this.width;
    this.canvasCtx = this.canvas.getContext("2d");
    this.sound = new Sound();
    this.pipe_to_pipe = 300;
    this.obstacle = new Obstacle(this);
    this.safe_zone = 200;
  }

  setSpeed(speed) {
    this.background.setSpeed(speed);
  }

  update() {
    this.canvasCtx.clearRect(0, 0, this.width, this.height);
    this.background.update();
    this.character.update();
    this.obstacle.update();
  }

  run() {
    this.background = new Background(this, "./public/img/14922843.jpg");
    this.character = new Character(this, "./public/img/pig.png", 100, 350);
    let that = this;
    this.canvas.addEventListener("click", () => {
      that.character.jump();
    });
    this.setSpeed(0.5);
    this.obstacle.init();
    setInterval(() => {
      this.update();
      this.canvasCtx.fillRect(10, 10, this.sound.vol / 100, 20);
    }, 1);
  }
}
