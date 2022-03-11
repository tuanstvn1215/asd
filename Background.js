export class Background {
  constructor(game, src) {
    this.canvasCtx = game.canvasCtx;
    this.speed = 0;
    this.src = src;
    this.pos = 0;
    this.img = new Image();
    this.img.src = this.src;
  }

  setSpeed(speed) {
    this.speed = speed;
  }
  update() {
    this.pos -= this.speed;

    if (this.pos <= -995) this.pos = 0;
    this.canvasCtx.drawImage(this.img, this.pos + this.img.naturalWidth, 0);
    this.canvasCtx.drawImage(this.img, this.pos, 0);
  }
}
