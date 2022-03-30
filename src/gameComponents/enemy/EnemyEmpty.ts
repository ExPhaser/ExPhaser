import Enemy from "./Enemy";

export default class EnemyEmpty extends Enemy {
  protected _body: Phaser.Physics.Arcade.Body;

  constructor(params: genericConfig) {
    super(params);
    this.create();
  }

  create() {

  }

  update(time: number, delta: number) {}

  
}
