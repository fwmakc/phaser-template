import Phaser from 'phaser';
import { GameScene } from './scenes/game.scene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: [GameScene],
};

export const StartGame = () => new Phaser.Game(config);
