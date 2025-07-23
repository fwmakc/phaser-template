import Phaser from 'phaser';
import { ConsoleEntity } from '../entities/console.entity';
import { InputEntity } from '../entities/input.entity';
import { WindowEntity } from '../entities/window.entity';

import { CommandsScenario } from '../scenarios/commands.scenario';
import { StartScenario } from '../scenarios/start.scenario';

export class GameScene extends Phaser.Scene {
  console!: ConsoleEntity;
  inputField!: InputEntity;
  window!: WindowEntity;

  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {}

  create() {
    this.createConsole();
    this.createInputField();
    this.createWindow();
    this.startGame();
  }

  update() {}

  createConsole() {
    this.console = new ConsoleEntity();

    const console = this.add.dom(0, 0, this.console.getContainer());
    console.setOrigin(0, 0);
  }

  createInputField() {
    this.inputField = new InputEntity();
    this.inputField.setInactive();
    this.inputField.onPressEnter((userInput) => this.onKeyPress(userInput));
    const inputField = this.add.dom(0, 0, this.inputField.getContainer());
    inputField.setOrigin(0, 0);
  }

  createWindow() {
    this.window = new WindowEntity();

    this.window.onHide(() => {
      this.inputField.setActive();
    });

    this.window.onShow(() => {
      this.inputField.setInactive();
      // setTimeout(() => {
      //   this.window.hide();
      // }, 2000);
    });

    // const { height, width } = this.game.config;
    // const window = this.add.dom(
    //   Number(width) / 2,
    //   Number(height) / 2,
    //   this.window.getContainer(),
    // );
    // window.setOrigin(0.5, 0.5);

    const window = this.add.dom(0, 0, this.window.getContainer());
    window.setOrigin(0, 0);
  }

  startGame() {
    const startScenario: StartScenario = new StartScenario(
      this.console,
      this.inputField,
      this.window,
    );
    startScenario.exec();

    const app = document.getElementById('app');
    app?.addEventListener('click', () => {
      this.inputField.focus();
      this.window.hide();
    });
  }

  onKeyPress(userInput: string) {
    const commandsScenario: CommandsScenario = new CommandsScenario(
      this.console,
      this.inputField,
      this.window,
    );

    commandsScenario.exec(userInput);
  }
}
