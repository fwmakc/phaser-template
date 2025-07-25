import { CommandTemplate } from './templates/command.template';

export class UnknownCommand extends CommandTemplate {
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
