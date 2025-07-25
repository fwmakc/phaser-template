import Phaser from 'phaser';
import { ConsoleSection } from '../sections/console.section';
import { InputSection } from '../sections/input.section';
import { WindowSection } from '../sections/window.section';

import { createConsoleSection } from './game/helpers/createConsoleSection.helper';
import { createInputSection } from './game/helpers/createInputSection.helper';
import { createWindowSection } from './game/helpers/createWindowSection.helper';
import { startGame } from './game/helpers/startGame.helper';
import { updateGame } from './game/helpers/updateGame.helper';
import { CharacterInterface } from '../characters/interfaces/character.interface';
import { ThingInterface } from '../things/interfaces/thing.interface';
// import { PlayerCharacter } from '../characters/player.character';

export class GameScene extends Phaser.Scene {
  consoleSection: ConsoleSection;
  inputSection: InputSection;
  windowSection: WindowSection;
  things: Map<string, ThingInterface>;
  characters: Map<string, CharacterInterface>;

  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {}

  create() {
    this.things = new Map<string, CharacterInterface>();

    // const player = new PlayerCharacter();
    // this.characters.set('player', player);

    // const map = new Map<number, string>();
    // map.set('1', 'Value 1');
    // map.set('2', 'Value 2');

    createConsoleSection(this);
    createInputSection(this);
    createWindowSection(this);
    startGame(this);
  }

  update(time: number) {
    if (!time) {
      updateGame(this, time);
    }
  }
}
