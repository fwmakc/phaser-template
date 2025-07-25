import { ConsoleSection } from '../../sections/console.section';
import { InputSection } from '../../sections/input.section';
import { WindowSection } from '../../sections/window.section';
import { CommandInterface } from '../interfaces/command.interface';
import { CommandSectionsInterface } from '../interfaces/commandSections.interface';

export abstract class CommandTemplate implements CommandInterface {
  protected console: ConsoleSection;
  protected input: InputSection;
  protected window: WindowSection;

  constructor(sections: CommandSectionsInterface) {
    this.console = sections.console;
    this.input = sections.input;
    this.window = sections.window;
  }

  abstract exec(args: any): void;
}
