import { CommandClass } from './classes/command.class';

export class NumberCommand extends CommandClass {
  exec(userinput: string) {
    this.input.setInactive();

    const number: number = +userinput || 0;
    this.console.print(`Вы ввели число: ${number}`);

    this.input.setActive();
  }
}
