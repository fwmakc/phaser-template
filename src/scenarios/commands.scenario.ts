import { ScenarioTemplate } from './templates/scenario.template';
import { CommandInterface } from '../commands/interfaces/command.interface';

// import { setCommandClass } from '../commands/helpers/setCommandClass.helper';
// import { setCommandClassByPatterns } from '../commands/helpers/setCommandClassByPatterns.helper';
import { setCommandClassByPatternsArray } from '../commands/helpers/setCommandClassByPatternsArray.helper';

export class CommandsScenario extends ScenarioTemplate {
  exec(userInput: string) {
    userInput = userInput.toLowerCase().trim();

    if (!userInput) {
      return;
    }

    // const CurrentCommand = setCommandClass(userInput);
    // const CurrentCommand = setCommandClassByPatterns(userInput);
    const CurrentCommand = setCommandClassByPatternsArray(userInput);

    const command: CommandInterface = new CurrentCommand({
      console: this.console,
      input: this.input,
      window: this.window,
    });

    command.exec(userInput);
  }
}
