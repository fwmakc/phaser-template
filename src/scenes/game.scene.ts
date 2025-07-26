import Phaser from 'phaser';
import { ConsoleSection } from '../sections/console.section';
import { InputSection } from '../sections/input.section';
import { ScreenSection } from '../sections/screen.section';
import { WindowSection } from '../sections/window.section';

import { CharacterInterface } from '../characters/interfaces/character.interface';
import { ThingInterface } from '../things/interfaces/thing.interface';

import { createConsoleSection } from './game/helpers/createConsoleSection.helper';
import { createInputSection } from './game/helpers/createInputSection.helper';
import { createScreenSection } from './game/helpers/createScreenSection.helper';
import { createWindowSection } from './game/helpers/createWindowSection.helper';
import { initScene } from './game/helpers/initScene.helper';
import { startGame } from './game/helpers/startGame.helper';
import { updateGame } from './game/helpers/updateGame.helper';

export class GameScene extends Phaser.Scene {
  consoleSection: ConsoleSection;
  inputSection: InputSection;
  screenSection: ScreenSection;
  windowSection: WindowSection;
  things: Map<string, ThingInterface>;
  characters: Map<string, CharacterInterface>;

  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {}

  create() {
    createConsoleSection(this);
    createInputSection(this);
    createScreenSection(this);
    createWindowSection(this);
    initScene(this);
    startGame(this);
  }

  update(time: number) {
    updateGame(this, time);
  }
}
