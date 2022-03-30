import Enemy from "./Enemy";

export default class EnemyPlatform extends Enemy {

  constructor(params: genericConfig) {
    super(params);
    this.setName("robot");
    this.create();
  }

  create() {
    this._body
      .setDragX(1000)
      .setCollideWorldBounds(true,0.5)
      .setImmovable(true)
      .setGravity(0,1200)
      .setMaxVelocity(250,550);

      this._body.setVelocityX(50);
    let _animation={
      key: "idle",
      frames: this.anims.generateFrameNumbers(this._config.key,{frames:[0,1,2,3]}),
      frameRate:10,
      yoyo: false,
      repeat: 0
    }
    this.anims.create(_animation);

    _animation={
      key: "move",
      frames: this.anims.generateFrameNumbers(this._config.key,{frames:[4,5,6,7]}),
      frameRate:10,
      yoyo: false,
      repeat: -1
    }
    this.anims.create(_animation);

    this.setFlipX(true);
    this.play("move");
  }

  update(time: number, delta: number) {}

  
}
