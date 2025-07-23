import Phaser from 'phaser';
import { GameScene } from './scenes/game.scene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  scene: [GameScene],

  width: window.innerWidth,
  height: window.innerHeight,
  scale: {
    mode: Phaser.Scale.RESIZE, // Устанавливаем режим растягивания
    autoCenter: Phaser.Scale.CENTER_BOTH, // Центрируем автоматически
  },

  dom: {
    // Это свойство позволяет создавать контейнер для DOM-элементов
    createContainer: true,
  },
};

export const StartGame = () => new Phaser.Game(config);
