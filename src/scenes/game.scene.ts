import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.image('logo', 'assets/logo.png');
  }

  create() {
    this.add
      .text(0, 0, 'PHASER TEMPLATE', { fontSize: '32px', color: '#ffffff' })
      .setOrigin(0.5, 0.5)
      .setPosition(this.cameras.main.centerX, this.cameras.main.centerY + 100);

    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, 'logo')
      .setOrigin(0.5, 0.5);
  }

  update() {}
}
