import { CommandTemplate } from './templates/command.template';

export class HelloCommand extends CommandTemplate {
  exec(userInput: string) {
    this.input.setInactive();

    this.console.append('> ').color('yellow').append(userInput).end();
    this.console.print('Здравствуйте! Как я могу помочь вам?');

    this.input.setActive();
  }
}
