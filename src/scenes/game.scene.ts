import Phaser from 'phaser';
import { ConsoleEntity } from '../entities/console.entity';
import { InputEntity } from '../entities/input.entity';
import { WindowEntity } from '../entities/window.entity';

import { createConsoleSection } from './game/helpers/createConsoleSection.helper';
import { createInputSection } from './game/helpers/createInputSection.helper';
import { createWindowSection } from './game/helpers/createWindowSection.helper';
import { startGame } from './game/helpers/startGame.helper';

export class GameScene extends Phaser.Scene {
  consoleSection!: ConsoleEntity;
  inputSection!: InputEntity;
  windowSection!: WindowEntity;

  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {}

  create() {
    createConsoleSection(this);
    createInputSection(this);
    createWindowSection(this);
    startGame(this);
  }

  update() {}
}
