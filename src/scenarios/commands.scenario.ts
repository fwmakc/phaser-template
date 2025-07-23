import { ScenarioClass } from '../classes/scenario.class';

import { helloCommand } from '../commands/hello.command';
import { unknownCommand } from '../commands/unknown.command';

export class CommandsScenario extends ScenarioClass {
  exec(userInput: string) {
    userInput = userInput.toLowerCase().trim();

    if (!userInput) {
      return;
    }

    console.log(this.console.getStatus());
    // this.console.clear();
    this.input.setInactive();
    this.console.append('> ').color('yellow').append(userInput).end();

    if (userInput === 'привет') {
      helloCommand(this.console);
    } else {
      unknownCommand(this.window);
      return;
    }

    this.input.setActive();
  }
}
