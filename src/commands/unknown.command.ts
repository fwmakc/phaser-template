import { CommandClass } from './classes/command.class';

export class UnknownCommand extends CommandClass {
  exec(userInput: string) {
    this.input.setInactive();

    this.window.show(
      `Неизвестная команда "${userInput}"`
        .trim()
        .replace(/\n +/g, '\n')
        .replace(/ +\n/g, '\n'),
      'white',
      '#700',
    );
  }
}
