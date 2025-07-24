import { CommandClass } from './classes/command.class';

export class HelloCommand extends CommandClass {
  exec(userInput: string) {
    this.input.setInactive();

    this.console.append('> ').color('yellow').append(userInput).end();
    this.console.print('Здравствуйте! Как я могу помочь вам?');

    this.input.setActive();
  }
}
