import { ConsoleSection } from '../../sections/console.section';
import { InputSection } from '../../sections/input.section';
import { WindowSection } from '../../sections/window.section';
import { ScenarioSectionsInterface } from '../interfaces/scenarioSections.interface';

export abstract class ScenarioClass {
  protected console: ConsoleSection;
  protected input: InputSection;
  protected window: WindowSection;

  constructor(sections: ScenarioSectionsInterface) {
    this.console = sections.console;
    this.input = sections.input;
    this.window = sections.window;
  }

  abstract exec(args: any): void;
}
