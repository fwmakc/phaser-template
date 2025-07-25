import { CommandTemplate } from './templates/command.template';

export class NumberCommand extends CommandTemplate {
  exec(userinput: string) {
    this.input.setInactive();

    const number: number = +userinput || 0;
    this.console.print(`Вы ввели число: ${number}`);

    this.input.setActive();
  }
}
